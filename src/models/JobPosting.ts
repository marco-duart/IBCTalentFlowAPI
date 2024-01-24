import { DataTypes, Model, Sequelize } from "sequelize";

export interface IJobPosting {
  title: string | null;
  description: string | null;
  requirements: string[] | null;
  jobLocation: string | null;
  salary?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  hiringProcess?: number[] | null;
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
  public hiringProcessId?: number[];
  public companyId!: number;
  public deletedAt?: Date | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initJobPosting = (sequelize: Sequelize) => {
  JobPosting.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requirements: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      jobLocation: {
        type: DataTypes.STRING,
        allowNull: false,
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
      hiringProcess: {
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
