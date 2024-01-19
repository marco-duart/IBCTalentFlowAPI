import { Request, Response } from "express";
import DashboardService from "../services/DashboardService";
import { UpdateDashboardDTO, CreateDashboardDTO } from "../dto/DashboardDTO";

class DashboardController {
  constructor(private service: DashboardService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateDashboardDTO = req.body;
      const createdDashboard = await this.service.create(data);
      res.status(201).json(createdDashboard);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const dashboard = await this.service.getById(id);

      if (dashboard) {
        res.status(201).json(dashboard);
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
      const dashboardArray = await this.service.getAll();

      if (dashboardArray) {
        res.status(201).json(dashboardArray);
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
      const data: UpdateDashboardDTO = req.body;
      const updatedDashboard = await this.service.update(id, data);

      if (updatedDashboard) {
        res.status(201).json(updatedDashboard);
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
      const deletedDashboard = await this.service.softDelete(id);

      if (deletedDashboard) {
        res.status(200).json(deletedDashboard);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Not found");
    }
  }
}

export default DashboardController;
