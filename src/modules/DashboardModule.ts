import { DashboardSchema, IDashboard } from "../models/Dashboard";
import DashboardRepository from "../repositories/DashboardRepository";
import DashboardService from "../services/DashboardService";
import DashboardController from "../controllers/DashboardController";
import { model } from "mongoose";

export class DashboardModule {
  static make() {
    const DashboardModel = model<IDashboard>('Dashboard', DashboardSchema);
    const repository = new DashboardRepository(DashboardModel)
    const service = new DashboardService(repository)
    const controller = new DashboardController(service)

    return { controller, service, repository }
  }
}
