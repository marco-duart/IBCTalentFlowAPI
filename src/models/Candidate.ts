import { Schema, model, Document } from "mongoose";

export interface ICandidate extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string; //(file or text)
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: string
  applicationStatus: string[]
  interviews: string[]
  feedback: string[]
  applicationDocuments: string[]
  deletedAt: Date;
}

export const CandidateSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    resume: { type: String, required: true },
    portfolio: { type: String },
    academicHistory: [
      {
        title: { type: String },
        institution: { type: String },
        degree: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    skills: { type: [String] },
    professionalLinks: [
      {
        title: { type: String },
        link: { type: String },
      },
    ],
    employmentHistory: {
      type: Schema.Types.ObjectId,
      ref: "EmploymentHistory",
    },
    applicationStatus: [
      { type: Schema.Types.ObjectId, ref: "ApplicationStatus" },
    ],
    interviews: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
    feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
    applicationDocuments: [
      { type: Schema.Types.ObjectId, ref: "ApplicationDocument" },
    ],
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const Candidate = model("Candidate", CandidateSchema);
