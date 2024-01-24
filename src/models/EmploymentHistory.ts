import { DataTypes, Model, Sequelize } from "sequelize";

export interface IEmploymentHistory {
  companyName: string | null;
  position: string | null;
  startDate: Date | null;
  endDate?: Date | null;
  achievements?: string[] | null;
  deletedAt?: Date | null;
}

class EmploymentHistory extends Model<IEmploymentHistory> implements IEmploymentHistory {
  public companyName!: string
  public position!: string
  public startDate!: Date
  public endDate?: Date
  public achievements?: string[]
  public deletedAt?: Date | null

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export const initEmploymentHistory = (sequelize: Sequelize) => {
  EmploymentHistory.init({
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    achievements: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, 
  {
    sequelize,
    modelName: 'EmploymentHistory',
    timestamps: true,
    paranoid: true,
  })
}

export { EmploymentHistory }