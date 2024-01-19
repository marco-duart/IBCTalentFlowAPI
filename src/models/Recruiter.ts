import { Schema, model, Document } from "mongoose";

export interface IRecruiter extends Document {
  name: string;
  email: string;
  position: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];
  deletedAt: Date;
}

export const RecruiterSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    contactInformation: {
      phoneNumber: [{ type: String, required: true }],
      email: [{ type: String, required: true }],
      companyLinks: [
        {
          title: { type: String, required: true },
          link: { type: String, required: true },
        },
      ],
    },
    assignedCandidateList: [{ type: Schema.Types.ObjectId, ref: "Candidate" }],
    candidateFeedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
    interviews: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
    hiringProcesses: [{ type: Schema.Types.ObjectId, ref: "HiringProcess" }],
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const Recruiter = model("Recruiter", RecruiterSchema);
