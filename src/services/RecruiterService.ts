import RecruiterRepository from '../repositories/RecruiterRepository';
import { UpdateRecruiterDTO, CreateRecruiterDTO } from '../dto/RecruiterDTO';
import { IRecruiter } from '../models/Recruiter';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class RecruiterService {
  private repository: RecruiterRepository;

  constructor(repository: RecruiterRepository) {
    this.repository = repository;
  }

  async create(data: CreateRecruiterDTO): Promise<IRecruiter> {
    const result = await this.repository.create(data);

    return result
  }

  async getAll(): Promise<IRecruiter[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IRecruiter | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateRecruiterDTO): Promise<IRecruiter | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IRecruiter | null> {
    return await this.repository.softDelete(id)
  }

}

export default RecruiterService;
