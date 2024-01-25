import { DataTypes, Model, Sequelize } from "sequelize";

export interface IJobPosting {
  title: string | null;
  description: string | null;
  requirements: string[] | null;
  jobLocation: string | null;
  salary?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  hiringProcessIds?: number[] | null;
  companyId: number | null;
  deletedAt?: Date | null;
}

class JobPosting extends Model<IJobPosting> implements IJobPosting {
  public title!: string;
  public description!: string;
  public requirements!: string[];
  public jobLocation!: string;
  public salary?: string;
  public startDate?: Date;
  public endDate?: Date;
  public hiringProcessIds?: number[];
  public companyId!: number;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initJobPosting = (sequelize: Sequelize) => {
  JobPosting.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      requirements: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      jobLocation: {
        type: DataTypes.STRING,
      },
      salary: {
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      hiringProcessIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      companyId: {
        type: DataTypes.INTEGER,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "JobPosting",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { JobPosting };
