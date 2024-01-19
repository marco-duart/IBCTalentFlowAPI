import { ApplicationStatusSchema, IApplicationStatus } from "../models/ApplicationStatus";
import ApplicationStatusRepository from "../repositories/ApplicationStatusRepository";
import ApplicationStatusService from "../services/ApplicationStatusService";
import ApplicationStatusController from "../controllers/ApplicationStatusController";
import { model } from "mongoose";

export class ApplicationStatusModule {
  static make() {
    const ApplicationStatusModel = model<IApplicationStatus>('ApplicationStatus', ApplicationStatusSchema);
    const repository = new ApplicationStatusRepository(ApplicationStatusModel)
    const service = new ApplicationStatusService(repository)
    const controller = new ApplicationStatusController(service)

    return { controller, service, repository }
  }
}
