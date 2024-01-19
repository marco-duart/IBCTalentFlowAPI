import { JobPostingSchema, IJobPosting } from "../models/JobPosting";
import JobPostingRepository from "../repositories/JobPostingRepository";
import JobPostingService from "../services/JobPostingService";
import JobPostingController from "../controllers/JobPostingController";
import { model } from "mongoose";

export class JobPostingModule {
  static make() {
    const JobPostingModel = model<IJobPosting>('JobPosting', JobPostingSchema);
    const repository = new JobPostingRepository(JobPostingModel)
    const service = new JobPostingService(repository)
    const controller = new JobPostingController(service)

    return { controller, service, repository }
  }
}
