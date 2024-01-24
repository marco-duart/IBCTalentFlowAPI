import { DataTypes, Model, Sequelize } from "sequelize";

export interface INotification {
  title: string;
  notificationType: string | null; //(scheduled interview, status update, etc.)
  recipient: string | null; //admins, users, all, maybe change type to number(to be id an id?)
  message: string | null;
  deletedAt?: Date | null;
}

class Notification extends Model<INotification> implements INotification {
  public title!: string;
  public notificationType!: string;
  public recipient!: string;
  public message!: string;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initNotification = (sequelize: Sequelize) => {
  Notification.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notificationType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipient: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Notification",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Notification };
