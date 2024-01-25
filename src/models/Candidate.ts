import { DataTypes, Model, Sequelize } from "sequelize";
import { ApplicationStatus } from "./ApplicationStatus";
import { User } from "./User";

export interface ICandidate {
  name: string | null;
  email: string | null;
  phoneNumber1: string | null;
  phoneNumber2?: string | null;
  employee: boolean | null;
  resume?: string | null;
  portfolio?: string | null;
  documents: {
    documentName: string,
    documentNumber: string,
    issueDate: Date;
    location: string;
    image: string;
  }[] | null
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[] | null;
  professionalLinks?:
    | {
        title: string;
        link: string;
      }[]
    | null;
  employmentHistory?:
    | {
        companyName: string;
        position: string;
        startDate: Date;
        endDate?: Date;
        achievements?: string[];
      }[]
    | null;
  applicationStatusIds?: number[] | null;
  userId: number | null;
  deletedAt?: Date | null;
}

class Candidate extends Model<ICandidate> implements ICandidate {
  public name!: string;
  public email!: string;
  public phoneNumber1!: string;
  public phoneNumber2?: string;
  public employee!: boolean;
  public resume?: string | null;
  public portfolio?: string | null;
  public documents!: {
    documentName: string,
    documentNumber: string,
    issueDate: Date;
    location: string;
    image: string;
  }[]
  public academicHistory!: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  public skills?: string[];
  public professionalLinks?:
    | {
        title: string;
        link: string;
      }[]
    | null;
  public employmentHistory?: {
    companyName: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    achievements?: string[];
  }[];
  public applicationStatusIds?: number[] | null;
  public userId!: number;
  public deletedAt?: Date | null;

  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initCandidate = (sequelize: Sequelize) => {
  Candidate.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber2: {
        type: DataTypes.STRING,
      },
      employee: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      resume: {
        type: DataTypes.STRING,
      },
      portfolio: {
        type: DataTypes.STRING,
      },
      documents: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      academicHistory: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      professionalLinks: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      employmentHistory: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      applicationStatusIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Candidate",
      timestamps: true,
      paranoid: true,
    }
  );

  Candidate.belongsTo(User, {
    foreignKey: "candidateId",
    targetKey: "id",
    as: "candidate",
  })

  Candidate.hasMany(ApplicationStatus, {
    foreignKey: "candidateId",
    as: "applications",
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })

};

export { Candidate };
