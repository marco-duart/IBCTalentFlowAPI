import { RecruiterSchema, IRecruiter } from "../models/Recruiter";
import RecruiterRepository from "../repositories/RecruiterRepository";
import RecruiterService from "../services/RecruiterService";
import RecruiterController from "../controllers/RecruiterController";
import { model } from "mongoose";

export class RecruiterModule {
  static make() {
    const RecruiterModel = model<IRecruiter>('Recruiter', RecruiterSchema);
    const repository = new RecruiterRepository(RecruiterModel)
    const service = new RecruiterService(repository)
    const controller = new RecruiterController(service)

    return { controller, service, repository }
  }
}
