import { DataTypes, Model, Sequelize } from "sequelize";

export interface IDashboard {
  overview: string | null;
  statistics: string | null;
  permissions: string | null;
  reporting: string | null;
  deletedAt?: Date | null;
}

class Dashboard extends Model<IDashboard> implements IDashboard {
  public overview!: string;
  public statistics!: string;
  public permissions!: string;
  public reporting!: string;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initDashboard = (sequelize: Sequelize) => {
  Dashboard.init(
    {
      overview: {
        type: DataTypes.STRING,
      },
      statistics: {
        type: DataTypes.STRING,
      },
      permissions: {
        type: DataTypes.STRING,
      },
      reporting: {
        type: DataTypes.STRING,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Dashboard",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Dashboard };
