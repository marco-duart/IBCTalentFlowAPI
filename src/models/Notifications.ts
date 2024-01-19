import { Schema, model, Document } from "mongoose";

export interface INotifications extends Document {
  notificationType: string; //(scheduled interview, status update, etc.)
  recipient: string;
  message: string;
  dateTime: Date;
  deletedAt: Date;
}

export const NotificationsSchema = new Schema(
  {
    notificationType: { type: String, required: true },
    recipient: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    dateTime: { type: Date, required: true },
    deletedAt: { type: Date},
  },
  { timestamps: true }
);

export const Notifications = model("Notifications", NotificationsSchema);
