import { Request, Response } from "express";
import InterviewService from "../services/InterviewService";
import { UpdateInterviewDTO, CreateInterviewDTO } from "../dto/InterviewDTO";

class InterviewController {
  constructor(private service: InterviewService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateInterviewDTO = req.body;
      const createdInterview = await this.service.create(data);
      res.status(201).json(createdInterview);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const interview = await this.service.getById(id);

      if (interview) {
        res.status(201).json(interview);
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
      const interviewArray = await this.service.getAll();

      if (interviewArray) {
        res.status(201).json(interviewArray);
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
      const data: UpdateInterviewDTO = req.body;
      const updatedInterview = await this.service.update(id, data);

      if (updatedInterview) {
        res.status(201).json(updatedInterview);
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
      const deletedInterview = await this.service.softDelete(id);

      if (deletedInterview) {
        res.status(200).json(deletedInterview);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default InterviewController;
