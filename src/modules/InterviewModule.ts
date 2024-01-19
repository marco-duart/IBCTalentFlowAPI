import { InterviewSchema, IInterview } from "../models/Interview";
import InterviewRepository from "../repositories/InterviewRepository";
import InterviewService from "../services/InterviewService";
import InterviewController from "../controllers/InterviewController";
import { model } from "mongoose";

export class InterviewModule {
  static make() {
    const InterviewModel = model<IInterview>('Interview', InterviewSchema);
    const repository = new InterviewRepository(InterviewModel)
    const service = new InterviewService(repository)
    const controller = new InterviewController(service)

    return { controller, service, repository }
  }
}
