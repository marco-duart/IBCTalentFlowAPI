import { DataTypes, Model, Sequelize } from "sequelize";
import { User } from "./User";
import { Interview } from "./Interview";
import { HiringProcess } from "./HiringProcess";

export interface IRecruiter {
  name: string | null;
  email: string | null;
  position?: string | null;
  interviewIds?: number[] | null;
  hiringProcessIds?: number[] | null;
  userId: number | null;
  deletedAt?: Date | null;
}

class Recruiter extends Model<IRecruiter> implements IRecruiter {
  public name!: string;
  public email!: string;
  public position?: string;
  public interviewIds?: number[];
  public hiringProcessIds?: number[];
  public userId!: number;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initRecruiter = (sequelize: Sequelize) => {
  Recruiter.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      interviewIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      hiringProcessIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Recruiter",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Recruiter };
