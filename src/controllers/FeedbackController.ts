import { Request, Response } from "express";
import FeedbackService from "../services/FeedbackService";
import { UpdateFeedbackDTO, CreateFeedbackDTO } from "../dto/FeedbackDTO";

class FeedbackController {
  constructor(private service: FeedbackService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateFeedbackDTO = req.body;
      const createdFeedback = await this.service.create(data);
      res.status(201).json(createdFeedback);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const feedback = await this.service.getById(id);

      if (feedback) {
        res.status(201).json(feedback);
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
      const feedbackArray = await this.service.getAll();

      if (feedbackArray) {
        res.status(201).json(feedbackArray);
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
      const data: UpdateFeedbackDTO = req.body;
      const updatedFeedback = await this.service.update(id, data);

      if (updatedFeedback) {
        res.status(201).json(updatedFeedback);
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
      const deletedFeedback = await this.service.softDelete(id);

      if (deletedFeedback) {
        res.status(200).json(deletedFeedback);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default FeedbackController;
