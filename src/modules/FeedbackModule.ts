import { FeedbackSchema, IFeedback } from "../models/Feedback";
import FeedbackRepository from "../repositories/FeedbackRepository";
import FeedbackService from "../services/FeedbackService";
import FeedbackController from "../controllers/FeedbackController";
import { model } from "mongoose";

export class FeedbackModule {
  static make() {
    const FeedbackModel = model<IFeedback>('Feedback', FeedbackSchema);
    const repository = new FeedbackRepository(FeedbackModel)
    const service = new FeedbackService(repository)
    const controller = new FeedbackController(service)

    return { controller, service, repository }
  }
}
