import { DataTypes, Model, Sequelize } from "sequelize";
import { ApplicationStatus } from "./ApplicationStatus";
import { HiringProcess } from "./HiringProcess";

export interface IFeedback {
  feedbackTitle: string | null;
  overallAssessment: number | null; //Verificar a necessidade e a forma de abordagem
  specificComment: string | null;
  improvements?: string | null;
  applicationStatusId: number | null;
  hiringProcessId: number | null;
  deletedAt?: Date | null;
}

class Feedback extends Model<IFeedback> implements IFeedback {
  public feedbackTitle!: string;
  public overallAssessment!: number;
  public specificComment!: string;
  public improvements?: string;
  public applicationStatusId!: number;
  public hiringProcessId!: number;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initFeedback = (sequelize: Sequelize) => {
  Feedback.init(
    {
      feedbackTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overallAssessment: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      specificComment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      improvements: {
        type: DataTypes.STRING,
      },
      applicationStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hiringProcessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Feedback",
      timestamps: true,
      paranoid: true,
    }
  );

  Feedback.belongsTo(ApplicationStatus, {
    foreignKey: 'applicationStatusId',
    targetKey: 'id',
    as: 'feedbacks',
  })

  Feedback.belongsTo(HiringProcess, {
    foreignKey: 'hiringProcessId',
    targetKey: 'id',
    as: 'feedbacks',
  })
};

export { Feedback };
