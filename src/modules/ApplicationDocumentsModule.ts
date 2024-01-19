import { ApplicationDocumentsSchema, IApplicationDocuments } from "../models/ApplicationDocuments";
import ApplicationDocumentsRepository from "../repositories/ApplicationDocumentsRepository";
import ApplicationDocumentsService from "../services/ApplicationDocumentsService";
import ApplicationDocumentsController from "../controllers/ApplicationDocumentsController";
import { model } from "mongoose";

export class ApplicationDocumentsModule {
  static make() {
    const ApplicationDocumentsModel = model<IApplicationDocuments>('ApplicationDocuments', ApplicationDocumentsSchema);
    const repository = new ApplicationDocumentsRepository(ApplicationDocumentsModel)
    const service = new ApplicationDocumentsService(repository)
    const controller = new ApplicationDocumentsController(service)

    return { controller, service, repository }
  }
}
