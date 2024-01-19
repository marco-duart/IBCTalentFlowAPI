import { Request, Response } from "express";
import ApplicationStatusService from "../services/ApplicationStatusService";
import {
  UpdateApplicationStatusDTO,
  CreateApplicationStatusDTO,
} from "../dto/ApplicationStatusDTO";

class ApplicationStatusController {
  constructor(private service: ApplicationStatusService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateApplicationStatusDTO = req.body;
      const createdApplicationStatus = await this.service.create(data);
      res.status(201).json(createdApplicationStatus);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const applicationStatus = await this.service.getById(id);

      if (applicationStatus) {
        res.status(201).json(applicationStatus);
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
      const applicationStatusArray = await this.service.getAll();

      if (applicationStatusArray) {
        res.status(201).json(applicationStatusArray);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateApplicationStatusDTO = req.body;
      const updatedApplicationStatus = await this.service.update(id, data);
      if (updatedApplicationStatus) {
        res.status(201).json(updatedApplicationStatus);
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
      const deletedApplicationStatus = await this.service.softDelete(id);

      if (deletedApplicationStatus) {
        res.status(200).json(deletedApplicationStatus);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default ApplicationStatusController;
