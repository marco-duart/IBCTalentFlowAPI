import { Request, Response } from "express";
import HiringProcessService from "../services/HiringProcessService";
import {
  UpdateHiringProcessDTO,
  CreateHiringProcessDTO,
} from "../dto/HiringProcessDTO";

class HiringProcessController {
  constructor(private service: HiringProcessService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateHiringProcessDTO = req.body;
      const createdHiringProcess = await this.service.create(data);
      res.status(201).json(createdHiringProcess);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const hiringProcess = await this.service.getById(id);

      if (hiringProcess) {
        res.status(201).json(hiringProcess);
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
      const hiringProcessArray = await this.service.getAll();

      if (hiringProcessArray) {
        res.status(201).json(hiringProcessArray);
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
      const data: UpdateHiringProcessDTO = req.body;
      const updatedHiringProcess = await this.service.update(id, data);

      if (updatedHiringProcess) {
        res.status(201).json(updatedHiringProcess);
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
      const deletedHiringProcess = await this.service.softDelete(id);

      if (deletedHiringProcess) {
        res.status(200).json(deletedHiringProcess);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default HiringProcessController;
