import { Request, Response } from "express";
import CandidateService from "../services/CandidateService";
import { UpdateCandidateDTO, CreateCandidateDTO } from "../dto/CandidateDTO";

class CandidateController {
  constructor(private service: CandidateService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateCandidateDTO = req.body;
      const createdCandidate = await this.service.create(data);
      res.status(201).json(createdCandidate);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const candidate = await this.service.getById(id);

      if (candidate) {
        res.status(201).json(candidate);
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
      const candidateArray = await this.service.getAll();

      if (candidateArray) {
        res.status(201).json(candidateArray);
      } else {
        res.status(500).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const data: UpdateCandidateDTO = req.body;
      const updatedCandidate = await this.service.update(id, data);

      if (updatedCandidate) {
        res.status(201).json(updatedCandidate);
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
      const deletedCandidate = await this.service.softDelete(id);

      if (deletedCandidate) {
        res.status(200).json(deletedCandidate);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default CandidateController;
