import { DataTypes, Model, Sequelize } from "sequelize";

export interface IRecruiter {
  name: string | null;
  email: string | null;
  position?: string | null;
  interviewsId?: number[] | null;
  hiringProcessesId?: number[] | null;
  userId: number | null;
  deletedAt?: Date | null;
}

class Recruiter extends Model<IRecruiter> implements IRecruiter {
  public name!: string;
  public email!: string;
  public position?: string;
  public interviewsId?: number[];
  public hiringProcessesId?: number[];
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
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
      },
      interviewsId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      hiringProcessesId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
