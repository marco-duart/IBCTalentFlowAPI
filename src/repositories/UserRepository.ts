import { Model } from "mongoose";
import BaseRepository from "./Repository";
import { IUser } from "../models/User";

class UserRepository extends BaseRepository<IUser> {
  constructor(model: Model<IUser>) {
    super(model);
  }
}

export default UserRepository;
