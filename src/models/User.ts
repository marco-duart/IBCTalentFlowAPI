import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  type: "Candidate" | "Recruiter";
  profile: string;
  deletedAt: Date;
}

export const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
    type: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, refPath: "type" },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
