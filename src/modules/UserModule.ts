import { UserSchema, IUser } from "../models/User";
import UserRepository from "../repositories/UserRepository";
import UserService from "../services/UserService";
import UserController from "../controllers/UserController";
import { model } from "mongoose";

export class UserModule {
  static make() {
    const UserModel = model<IUser>('User', UserSchema);
    const repository = new UserRepository(UserModel)
    const service = new UserService(repository)
    const controller = new UserController(service)

    return { controller, service, repository }
  }
}
