import { EmploymentHistorySchema, IEmploymentHistory } from "../models/EmploymentHistory";
import EmploymentHistoryRepository from "../repositories/EmploymentHistoryRepository";
import EmploymentHistoryService from "../services/EmploymentHistoryService";
import EmploymentHistoryController from "../controllers/EmploymentHistoryController";
import { model } from "mongoose";

export class EmploymentHistoryModule {
  static make() {
    const EmploymentHistoryModel = model<IEmploymentHistory>('EmploymentHistory', EmploymentHistorySchema);
    const repository = new EmploymentHistoryRepository(EmploymentHistoryModel)
    const service = new EmploymentHistoryService(repository)
    const controller = new EmploymentHistoryController(service)

    return { controller, service, repository }
  }
}
