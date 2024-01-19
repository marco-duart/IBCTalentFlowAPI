import { Schema, model, Document } from "mongoose";

export interface IApplicationStatus extends Document {
  status: string; //(pending, under review, approved, rejected)
  additionalComments: string;
  candidate: string
  hiringProcess: string
  deletedAt: Date;
}

export const ApplicationStatusSchema = new Schema(
  {
    status: { type: String, required: true },
    additionalComments: { type: String },
    candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
    hiringProcess: { type: Schema.Types.ObjectId, ref: "HiringProcess" },
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const ApplicationStatus = model(
  "ApplicationStatus",
  ApplicationStatusSchema
);
