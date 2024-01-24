import { DataTypes, Model, Sequelize } from "sequelize";

export interface IFeedback {
  feedbackTitle: string | null;
  overallAssessment: number | null; //Verificar a necessidade e a forma de abordagem
  specificComment: string | null;
  improvements?: string | null;
  candidateId: number | null;
  hiringProcessId: number | null;
  deletedAt?: Date | null;
}

class Feedback extends Model<IFeedback> implements IFeedback {
  public feedbackTitle!: string;
  public overallAssessment!: number;
  public specificComment!: string;
  public improvements?: string;
  public candidateId!: number;
  public hiringProcessId!: number;
  public deletedAt?: Date | undefined;

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
      candidateId: {
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
};

export { Feedback };
