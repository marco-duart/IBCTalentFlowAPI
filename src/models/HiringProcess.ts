import { DataTypes, Model, Sequelize } from "sequelize";

export interface IHiringProcess {
  startDate: Date | null;
  endDate?: Date | null;
  stage: string | null; //(interviews, tests, etc.)
  status: string | null; //(open, in progress, closed)
  recruiterId: number | null;
  interviewsId?: number[] | null;
  candidatesId?: number[] | null;
  applicationStatusId?: number[] | null;
  deletedAt?: Date | null;
}

class HiringProcess extends Model<IHiringProcess> implements IHiringProcess {
  public startDate!: Date;
  public endDate?: Date;
  public stage!: string;
  public status!: string;
  public recruiterId!: number;
  public interviewsId?: number[];
  public candidatesId?: number[];
  public applicationStatusId?: number[];
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
      },
      interviewsId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      candidatesId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      applicationStatusId: {
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
};

export { HiringProcess };
