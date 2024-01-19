import { HiringProcessSchema, IHiringProcess } from "../models/HiringProcess";
import HiringProcessRepository from "../repositories/HiringProcessRepository";
import HiringProcessService from "../services/HiringProcessService";
import HiringProcessController from "../controllers/HiringProcessController";
import { model } from "mongoose";

export class HiringProcessModule {
  static make() {
    const HiringProcessModel = model<IHiringProcess>('HiringProcess', HiringProcessSchema);
    const repository = new HiringProcessRepository(HiringProcessModel)
    const service = new HiringProcessService(repository)
    const controller = new HiringProcessController(service)

    return { controller, service, repository }
  }
}
