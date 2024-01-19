import { Request, Response } from "express";
import NotificationsService from "../services/NotificationsService";
import {
  UpdateNotificationsDTO,
  CreateNotificationsDTO,
} from "../dto/NotificationsDTO";

class NotificationsController {
  constructor(private service: NotificationsService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateNotificationsDTO = req.body;
      const createdNotifications = await this.service.create(data);
      res.status(201).json(createdNotifications);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const notifications = await this.service.getById(id);

      if (notifications) {
        res.status(201).json(notifications);
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
      const notificationsArray = await this.service.getAll();

      if (notificationsArray) {
        res.status(201).json(notificationsArray);
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
      const data: UpdateNotificationsDTO = req.body;
      const updatedNotifications = await this.service.update(id, data);

      if (updatedNotifications) {
        res.status(201).json(updatedNotifications);
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
      const deletedNotifications = await this.service.softDelete(id);

      if (deletedNotifications) {
        res.status(200).json(deletedNotifications);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default NotificationsController;
