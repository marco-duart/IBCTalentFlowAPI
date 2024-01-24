import { DataTypes, Model, Sequelize } from "sequelize";

export interface ICompany {
  companyName: string | null;
  cnpj: string | null;
  sector: string | null;
  companySize: number | null;
  companyLocation: string | null;
  contactInformation?: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  } | null;
  jobPostingsIdId?: string | null;
  deletedAt?: Date | null;
}

class Company extends Model<ICompany> implements ICompany {
  public companyName!: string;
  public cnpj!: string;
  public sector!: string;
  public companySize!: number;
  public companyLocation!: string;
  public contactInformation?: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  public jobPostingsIdId?: string;
  public deletedAt?: Date | undefined;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initCompany = (sequelize: Sequelize) => {
  Company.init(
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companySize: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      companyLocation: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      contactInformation: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      jobPostingsIdId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Company",
      timestamps: true,
      paranoid: true,
    }
  );
};

export { Company };
