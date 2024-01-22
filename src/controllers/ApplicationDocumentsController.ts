import { Request, Response } from "express";
import ApplicationDocumentsService from "../services/ApplicationDocumentsService";
import {
  UpdateApplicationDocumentsDTO,
  CreateApplicationDocumentsDTO,
} from "../dto/ApplicationDocumentsDTO";

class ApplicationDocumentsController {
  constructor(private service: ApplicationDocumentsService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateApplicationDocumentsDTO = req.body;
      const createdApplicationDocument = await this.service.create(data);
      res.status(201).json(createdApplicationDocument);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const applicationDocument = await this.service.getById(id);

      if (applicationDocument) {
        res.json(applicationDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const applicationDocumentsArray = await this.service.getAll();

      if (applicationDocumentsArray) {
        res.status(200).json(applicationDocumentsArray);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateApplicationDocumentsDTO = req.body;
      const updatedDocument = await this.service.update(id, data);

      if (updatedDocument) {
        res.status(200).json(updatedDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deletedApplicationDocument = await this.service.softDelete(id);

      if (deletedApplicationDocument) {
        res.status(200).json(deletedApplicationDocument);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default ApplicationDocumentsController;
