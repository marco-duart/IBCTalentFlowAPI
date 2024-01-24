import { DataTypes, Model, Sequelize } from "sequelize";

export interface IApplicationDocuments {
  resume: string | null | undefined;
  coverLetter?: string | null;
  relevantDocuments: string[] | null;
  candidateId: number | null;
  deletedAt?: Date | null;
}

class ApplicationDocuments
  extends Model<IApplicationDocuments>
  implements IApplicationDocuments
{
  public resume!: string;
  public coverLetter?: string;
  public relevantDocuments!: string[];
  public candidateId!: number;
  public deletedAt?: Date | undefined;

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
      candidateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "ApplicationDocuments",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { ApplicationDocuments };
