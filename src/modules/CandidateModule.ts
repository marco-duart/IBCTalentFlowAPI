import { CandidateSchema, ICandidate } from "../models/Candidate";
import CandidateRepository from "../repositories/CandidateRepository";
import CandidateService from "../services/CandidateService";
import CandidateController from "../controllers/CandidateController";
import { model } from "mongoose";

export class CandidateModule {
  static make() {
    const CandidateModel = model<ICandidate>('Candidate', CandidateSchema);
    const repository = new CandidateRepository(CandidateModel)
    const service = new CandidateService(repository)
    const controller = new CandidateController(service)

    return { controller, service, repository }
  }
}
