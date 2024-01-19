import { Request, Response } from "express";
import JobPostingService from "../services/JobPostingService";
import { UpdateJobPostingDTO, CreateJobPostingDTO } from "../dto/JobPostingDTO";

class JobPostingController {
  constructor(private service: JobPostingService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateJobPostingDTO = req.body;
      const createdJobPosting = await this.service.create(data);
      res.status(201).json(createdJobPosting);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const jobPosting = await this.service.getById(id);

      if (jobPosting) {
        res.status(201).json(jobPosting);
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
      const jobPostingArray = await this.service.getAll();

      if (jobPostingArray) {
        res.status(201).json(jobPostingArray);
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
      const data: UpdateJobPostingDTO = req.body;
      const updatedJobPosting = await this.service.update(id, data);

      if (updatedJobPosting) {
        res.status(201).json(updatedJobPosting);
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
      const deletedJobPosting = await this.service.softDelete(id);

      if (deletedJobPosting) {
        res.status(200).json(deletedJobPosting);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default JobPostingController;
