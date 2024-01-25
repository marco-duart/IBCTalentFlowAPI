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
      },
      candidateId: {
        type: DataTypes.INTEGER,
      },
      hiringProcessId: {
        type: DataTypes.INTEGER,
      },
      interviewIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      feedbackIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
};

export { ApplicationStatus };
