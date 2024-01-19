import { CompanySchema, ICompany } from "../models/Company";
import CompanyRepository from "../repositories/CompanyRepository";
import CompanyService from "../services/CompanyService";
import CompanyController from "../controllers/CompanyController";
import { model } from "mongoose";

export class CompanyModule {
  static make() {
    const CompanyModel = model<ICompany>('Company', CompanySchema);
    const repository = new CompanyRepository(CompanyModel)
    const service = new CompanyService(repository)
    const controller = new CompanyController(service)

    return { controller, service, repository }
  }
}
