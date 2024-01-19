import { Request, Response } from "express";
import RecruiterService from "../services/RecruiterService";
import { UpdateRecruiterDTO, CreateRecruiterDTO } from "../dto/RecruiterDTO";

class RecruiterController {
  constructor(private service: RecruiterService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateRecruiterDTO = req.body;
      const createdRecruiter = await this.service.create(data);
      res.status(201).json(createdRecruiter);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const recruiter = await this.service.getById(id);

      if (recruiter) {
        res.status(201).json(recruiter);
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
      const recruiterArray = await this.service.getAll();

      if (recruiterArray) {
        res.status(201).json(recruiterArray);
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
      const data: UpdateRecruiterDTO = req.body;
      const updatedRecruiter = await this.service.update(id, data);

      if (updatedRecruiter) {
        res.status(201).json(updatedRecruiter);
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
      const deletedRecruiter = await this.service.softDelete(id);

      if (deletedRecruiter) {
        res.status(200).json(deletedRecruiter);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default RecruiterController;
