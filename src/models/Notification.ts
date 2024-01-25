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
      },
      notificationType: {
        type: DataTypes.STRING,
      },
      recipient: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
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
