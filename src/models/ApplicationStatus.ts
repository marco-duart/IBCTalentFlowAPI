import { DataTypes, Model, Sequelize } from "sequelize";

//MODELS IMPORTS
import { HiringProcess } from "./HiringProcess";
import { Candidate } from "./Candidate";
import { Feedback } from "./Feedback";
import { Interview } from "./Interview";

export interface IApplicationStatus {
  status: string; //(pending, under review, approved, rejected)
  candidateId: number;
  hiringProcessId: number;
  interviewIds?: number[] | null;
  feedbackIds?: number[] | null;
  deletedAt?: Date;
}

class ApplicationStatus
  extends Model<IApplicationStatus>
  implements IApplicationStatus
{
  public status!: string;
  public candidateId!: number;
  public hiringProcessId!: number;
  public interviewIds?: number[];
  public feedbackIds?: number[];
  public deletedAt?: Date;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initApplicationStatus = (sequelize: Sequelize) => {
  ApplicationStatus.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      candidateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hiringProcessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      interviewIds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      feedbackIds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "ApplicationStatus",
      timestamps: true,
      paranoid: true,
    }
  );

  ApplicationStatus.belongsTo(Candidate, {
    foreignKey: 'applicationStatusIds',
    targetKey: 'id',
    as: 'candidateStatus',
  });

  ApplicationStatus.belongsTo(HiringProcess, {
    foreignKey: 'applicationStatusIds',
    targetKey: 'id',
    as: 'candidateStatus',
  })

  ApplicationStatus.hasMany(Feedback, {
    foreignKey: 'applicationStatusId',
    as: "application",
    onDelete: "SET NULL",
    onUpdate: "CASCATE"
  })

  ApplicationStatus.hasMany(Interview, {
    foreignKey: 'applicationStatusId',
    as: "application",
    onDelete: "SET NULL",
    onUpdate: "CASCATE"
  });

};

export { ApplicationStatus };
