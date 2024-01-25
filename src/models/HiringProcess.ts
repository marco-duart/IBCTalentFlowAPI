import { DataTypes, Model, Sequelize } from "sequelize";
import { ApplicationStatus } from "./ApplicationStatus";
import { Interview } from "./Interview";
import { Recruiter } from "./Recruiter";
import { JobPosting } from "./JobPosting";

export interface IHiringProcess {
  startDate: Date | null;
  endDate?: Date | null;
  stage: string | null; //(interviews, tests, etc.)
  status: string | null; //(open, in progress, closed)
  recruiterId: number | null;
  jobPostingId: number | null;
  interviewIds?: number[] | null;
  applicationStatusIds?: number[] | null;
  deletedAt?: Date | null;
}

class HiringProcess extends Model<IHiringProcess> implements IHiringProcess {
  public startDate!: Date;
  public endDate?: Date;
  public stage!: string;
  public status!: string;
  public recruiterId!: number;
  public jobPostingId!: number;
  public interviewIds?: number[];
  public applicationStatusIds?: number[];
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initHiringProcess = (sequelize: Sequelize) => {
  HiringProcess.init(
    {
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      stage: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      recruiterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jobPostingId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      interviewIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      applicationStatusIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "HiringProcess",
      timestamps: true,
      paranoid: true,
    }
  );

  HiringProcess.belongsTo(Recruiter, {
    foreignKey: "recruiterId",
    targetKey: "id",
    as: "hiringProcesses",
  });

  HiringProcess.belongsTo(JobPosting, {
    foreignKey: "jobPostingId",
    targetKey: "id",
    as: "hiringProcesses",
  });

  HiringProcess.hasMany(ApplicationStatus, {
    foreignKey: "hiringProcessId",
    as: "applications",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  });

  HiringProcess.hasMany(Interview, {
    foreignKey: "hiringProcessId",
    as: "interviews",
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  });
};

export { HiringProcess };
