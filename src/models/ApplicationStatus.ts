import { DataTypes, Model, Sequelize } from "sequelize";

export interface IApplicationStatus {
  status: string; //(pending, under review, approved, rejected)
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
  deletedAt?: Date;
}

class ApplicationStatus
  extends Model<IApplicationStatus>
  implements IApplicationStatus
{
  public status!: string;
  public additionalComments?: string;
  public relevantDocuments!: string[];
  public candidate!: string;
  public hiringProcess!: string;
  public deletedAt?: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initApplicationStatus = (sequelize: Sequelize) => {
  ApplicationStatus.init(
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      additionalComments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      candidate: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      hiringProcess: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    { sequelize, modelName: "ApplicationStatus", timestamps: true }
  );
};

export default ApplicationStatus;
