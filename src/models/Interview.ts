import { DataTypes, Model, Sequelize } from "sequelize";
import { Recruiter } from "./Recruiter";
import { ApplicationStatus } from "./ApplicationStatus";
import { HiringProcess } from "./HiringProcess";

export interface IInterview {
  dateTime: Date | null;
  interviewType: string | null; //(in-person, online)
  questions?:
    | {
        question: string;
        answer: string;
      }[]
    | null;
  interviewFeedback?: string | null;
  applicationStatusId: number | null;
  hiringProcessId: number | null;
  recruiterId: number | null;
  deletedAt?: Date | null;
}

class Interview extends Model<IInterview> implements IInterview {
  public dateTime!: Date;
  public interviewType!: string;
  public questions?: {
    question: string;
    answer: string;
  }[];
  public interviewFeedback?: string;
  public applicationStatusId!: number;
  public hiringProcessId!: number;
  public recruiterId!: number;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initInterview = (sequelize: Sequelize) => {
  Interview.init(
    {
      dateTime: {
        type: DataTypes.DATE,
      },
      interviewType: {
        type: DataTypes.STRING,
      },
      questions: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      interviewFeedback: {
        type: DataTypes.STRING,
      },
      applicationStatusId: {
        type: DataTypes.INTEGER,
      },
      hiringProcessId: {
        type: DataTypes.INTEGER,
      },
      recruiterId: {
        type: DataTypes.INTEGER,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Interview",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Interview };
