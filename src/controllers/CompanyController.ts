import { Request, Response } from "express";
import CompanyService from "../services/CompanyService";
import { UpdateCompanyDTO, CreateCompanyDTO } from "../dto/CompanyDTO";

class CompanyController {
  constructor(private service: CompanyService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateCompanyDTO = req.body;
      const createdCompany = await this.service.create(data);

      res.status(201).json(createdCompany);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const company = await this.service.getById(id);

      if (company) {
        res.status(201).json(company);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const companyArray = await this.service.getAll();

      if (companyArray) {
        res.status(201).json(companyArray);
      } else {
        res.status(404).send("Not Found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateCompanyDTO = req.body;
      const updatedCompany = await this.service.update(id, data);

      if (updatedCompany) {
        res.status(201).json(updatedCompany);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedCompany = await this.service.softDelete(id);

      if (deletedCompany) {
        res.status(200).json(deletedCompany);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default CompanyController;
