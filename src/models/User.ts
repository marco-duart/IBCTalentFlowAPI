import { DataTypes, Model, Sequelize } from "sequelize";


type Role = "ti" | "admin" | "user"

export interface IUser {
  name: string | null;
  cpf: string | null
  email: string | null;
  password: string | null;
  role: Role | null;
  candidateId?: number | null;
  recruiterId?: number | null;
  deletedAt?: Date | null;
}

class User extends Model<IUser> implements IUser {
  public name!: string
  public cpf!: string
  public email!: string
  public password!: string
  public role!: Role
  public candidateId?: number
  public recruiterId?: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

export const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      password: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      candidateId: {
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
      modelName: 'User',
      timestamps: true,
      paranoid: true,
    }
  );
}
