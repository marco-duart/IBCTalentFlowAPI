import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UpdateUserDTO, CreateUserDTO } from "../dto/UserDTO";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateUserDTO = req.body;
      const createdUser = await this.service.create(data);
      res.status(201).json(createdUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const user = await this.service.getById(id);

      if (user) {
        res.status(201).json(user);
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
      const userArray = await this.service.getAll();

      if (userArray) {
        res.status(201).json(userArray);
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
      const data: UpdateUserDTO = req.body;
      const updatedUser = await this.service.update(id, data);

      if (updatedUser) {
        res.status(201).json(updatedUser);
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
      const deletedUser = await this.service.softDelete(id);

      if (deletedUser) {
        res.status(200).json(deletedUser);
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default UserController;
