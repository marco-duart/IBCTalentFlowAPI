import { DataTypes, Model, Sequelize } from "sequelize";

export interface IApplicationStatus {
  status: string; //(pending, under review, approved, rejected)
  additionalComments?: string;
  candidateId: number;
  hiringProcessId: number;
  deletedAt?: Date;
}

class ApplicationStatus
  extends Model<IApplicationStatus>
  implements IApplicationStatus
{
  public status!: string;
  public additionalComments?: string;
  public relevantDocuments!: string[];
  public candidateId!: number;
  public hiringProcessId!: number;
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
      candidateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hiringProcessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    { sequelize, modelName: "ApplicationStatus", timestamps: true, paranoid: true }
  );
};

export default ApplicationStatus;
