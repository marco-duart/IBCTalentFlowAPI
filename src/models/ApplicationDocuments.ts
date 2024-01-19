import { DataTypes, Model, Sequelize } from 'sequelize';

interface IApplicationDocumentsAttributes {
  resume: string;
  coverLetter?: string;
  relevantDocuments: string[];
  candidate: string;
  deletedAt?: Date | null;
}

class ApplicationDocuments extends Model<IApplicationDocumentsAttributes> implements IApplicationDocumentsAttributes {
  public resume!: string;
  public coverLetter?: string;
  public relevantDocuments!: string[];
  public candidate!: string;
  public deletedAt?: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initApplicationDocuments = (sequelize: Sequelize) => {
  ApplicationDocuments.init(
    {
      resume: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverLetter: {
        type: DataTypes.STRING,
      },
      relevantDocuments: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      candidate: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'ApplicationDocuments',
      timestamps: true,
    }
  );
};

export default ApplicationDocuments;
