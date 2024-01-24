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

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initDashboard = (sequelize: Sequelize) => {
  Dashboard.init(
    {
      overview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statistics: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      permissions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reporting: {
        type: DataTypes.STRING,
        allowNull: false,
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

export { Dashboard }