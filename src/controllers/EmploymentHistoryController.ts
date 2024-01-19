import { Request, Response } from "express";
import EmploymentHistoryService from "../services/EmploymentHistoryService";
import {
  UpdateEmploymentHistoryDTO,
  CreateEmploymentHistoryDTO,
} from "../dto/EmploymentHistoryDTO";

class EmploymentHistoryController {
  constructor(private service: EmploymentHistoryService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateEmploymentHistoryDTO = req.body;
      const createdEmploymentHistory = await this.service.create(data);
      res.status(201).json(createdEmploymentHistory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const employmentHistory = await this.service.getById(id);

      if (employmentHistory) {
        res.status(201).json(employmentHistory);
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
      const employmentHistoryArray = await this.service.getAll();

      if (employmentHistoryArray) {
        res.status(201).json(employmentHistoryArray);
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
      const data: UpdateEmploymentHistoryDTO = req.body;
      const updatedEmploymentHistory = await this.service.update(id, data);

      if (updatedEmploymentHistory) {
        res.status(201).json(updatedEmploymentHistory);
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
      const deletedEmploymentHistory = await this.service.softDelete(id);

      if (deletedEmploymentHistory) {
        res.status(200).json(deletedEmploymentHistory);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default EmploymentHistoryController;
