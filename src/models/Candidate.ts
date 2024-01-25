import { DataTypes, Model, Sequelize } from "sequelize";
import { ApplicationStatus } from "./ApplicationStatus";
import { Interview } from "./Interview";
import { Feedback } from "./Feedback";
import { ApplicationDocuments } from "./ApplicationDocuments";

export interface ICandidate {
  name: string | null;
  email: string | null;
  phoneNumber1: string | null;
  phoneNumber2?: string | null;
  employee: boolean | null;
  resume?: string | null;
  portfolio?: string | null;
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
  applicationStatusId?: number[] | null;
  interviewsId?: number[] | null;
  feedbackId?: number[] | null;
  applicationDocumentsId?: number[] | null;
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
  public academicHistory!: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  public skills?: string[] | null;
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
  public applicationStatusId?: number[] | null;
  public interviewsId?: number[] | null;
  public feedbackId?: number[] | null;
  public applicationDocumentsId?: number[] | null;
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
      applicationStatusId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      interviewsId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      feedbackId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      applicationDocumentsId: {
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

  Candidate.hasMany(ApplicationStatus, {
    foreignKey: "id",
    sourceKey: "applicationStatusId",
    as: "applicationsStatus",
  });

  Candidate.hasMany(Interview, {
    foreignKey: "id",
    sourceKey: "interviewsId",
    as: "interviews",
  });

  Candidate.hasMany(Feedback, {
    foreignKey: "id",
    sourceKey: "feedbackId",
    as: "feedbacks",
  });

  Candidate.hasMany(ApplicationDocuments, {
    foreignKey: "id",
    sourceKey: "applicationDocumentsId",
    as: "applicationDocuments",
  });
};

export { Candidate };
