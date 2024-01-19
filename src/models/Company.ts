import { Schema, model, Document } from "mongoose";

export interface ICompany extends Document {
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: string;
  deletedAt: Date;
}

export const CompanySchema = new Schema(
  {
    companyName: { type: String, required: true },
    sector: { type: String, required: true },
    companySize: { type: Number, required: true },
    companyLocation: { type: String, required: true },
    contactInformation: [
      {
        title: { type: String },
        link: { type: String },
      },
    ],
    jobPostings: [{ type: Schema.Types.ObjectId, ref: "JobPosting" }],
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const Company = model("Company", CompanySchema);
