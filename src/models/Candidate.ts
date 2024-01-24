import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ICandidate {
  name: string;
  email: string;
  phoneNumber: string;
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
  professionalLinks?: {
    title: string;
    link: string;
  }[] | null;
  employmentHistory?: string | null;
  applicationStatus?: string[] | null;
  interviews?: string[] | null;
  feedback?: string[] | null;
  applicationDocuments?: string[] | null;
  deletedAt?: Date | null;
}

class Candidate extends Model<ICandidate> implements ICandidate {
  public name!: string;
  public email!: string;
  public phoneNumber!: string;
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
  public professionalLinks?: {
    title: string;
    link: string;
  }[] | null;
  public employmentHistory?: string | null;
  public applicationStatus?: string[] | null;
  public interviews?: string[] | null;
  public feedback?: string[] | null;
  public applicationDocuments?: string[] | null;
  public deletedAt?: Date | null;

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
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
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
    },
    {
      sequelize,
      modelName: 'Candidate',
      timestamps: true,
      paranoid: true,
    }
  );
};
