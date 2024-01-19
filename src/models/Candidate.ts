import { DataTypes, Model, Sequelize } from "sequelize";

export interface ICandidate {
  name: string;
  email: string;
  phoneNumber: string;
  resume?: string; //(file or text)
  portfolio?: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  employmentHistory?: string;
  applicationStatus?: string[];
  interviews?: string[];
  feedback?: string[];
  applicationDocuments?: string[];
  deletedAt?: Date;
}

class Candidate extends Model<ICandidate> implements ICandidate {
  public name!: string;
  public email!: string;
  public phoneNumber!: string;
  public resume?: string | undefined;
  public portfolio?: string | undefined;
  public academicHistory!: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  public skills?: string[];
  public professionalLinks?: { title: string; link: string }[] | undefined;
  public employmentHistory?: string | undefined;
  public applicationStatus?: string[] | undefined;
  public interviews?: string[] | undefined;
  public feedback?: string[] | undefined;
  public applicationDocuments?: string[] | undefined;
  public deletedAt?: Date | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initCandidate = (sequelize: Sequelize) => {
  Candidate.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    resume: {
      type: DataTypes.STRING,
    },
    portfolio: {
      type: DataTypes.STRING,
    },
    academicHistory: {
      title: { type: DataTypes.STRING },
      institution: { type: DataTypes.STRING },
      degree: { type: DataTypes.STRING },
      startDate: { type: DataTypes.DATE },
      endDate: { type: DataTypes.DATE },
    },
    skills: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    professionalLinks: {
      title: { type: DataTypes.STRING},
      link: { type: DataTypes.STRING}
    },
    employmentHistory: {
      type: DataTypes.UUID
    },
    applicationStatus: {
      type: DataTypes.ARRAY(DataTypes.UUID)
    },
    interviews: {
      type: DataTypes.ARRAY(DataTypes.UUID)
    },
    feedback: {
      type: DataTypes.ARRAY(DataTypes.UUID)
    },
    applicationDocuments: {
      type: DataTypes.ARRAY(DataTypes.UUID)
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {sequelize, modelName: "Candidate", timestamps: true});
};
