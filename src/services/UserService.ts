import { hash } from 'bcrypt';
import UserRepository from '../repositories/UserRepository';
import { UpdateUserDTO, CreateUserDTO } from '../dto/UserDTO';
import { User } from '../models/User';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.repository.findByCpf(data.cpf)
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

  async getAll(): Promise<User[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<User | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateUserDTO): Promise<User | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<User | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default UserService;
