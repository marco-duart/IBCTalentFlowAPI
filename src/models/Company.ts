import { DataTypes, Model, Sequelize } from "sequelize";
import { JobPosting } from "./JobPosting";

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
  jobPostingIds?: string | null;
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
  public jobPostingIds?: string;
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
      },
      cnpj: {
        type: DataTypes.STRING,
      },
      sector: {
        type: DataTypes.STRING,
      },
      companySize: {
        type: DataTypes.INTEGER,
      },
      companyLocation: {
        type: DataTypes.STRING,
      },
      contactInformation: {
        type: DataTypes.JSON,
      },
      jobPostingIds: {
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
