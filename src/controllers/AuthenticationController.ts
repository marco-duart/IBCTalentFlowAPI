import { Request, Response } from "express";
import { AuthenticationService } from "../services/AuthenticationService";
import { AuthenticationDTO } from "../dto/authenticationDTO";

export class AuthenticationController {
  constructor(private service: AuthenticationService) {}

  async login(req: Request, res: Response) {
    const data: AuthenticationDTO = req.body

    const result = await this.service.login(data);
    if ("error" in result) {
      return res.status((result as { status: number }).status).json(result);
    }

    return res.status(200).json(result);
  }
}
