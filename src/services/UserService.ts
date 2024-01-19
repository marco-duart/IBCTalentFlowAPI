import { hash } from 'bcrypt';
import UserRepository from '../repositories/UserRepository';
import { UpdateUserDTO, CreateUserDTO } from '../dto/UserDTO';
import { IUser } from '../models/User';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async create(data: CreateUserDTO): Promise<IUser> {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if(userAlreadyExists) {
      throw new UserAlreadyExistsError(userAlreadyExists.email)
    }

    const payload = {
      ...data,
      password: await hash(data.password, 8)
    }

    const result = await this.repository.create(payload);

    return result
  }

  async getAll(): Promise<IUser[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IUser | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateUserDTO): Promise<IUser | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IUser | null> {
    return await this.repository.softDelete(id)
  }

}

export default UserService;
