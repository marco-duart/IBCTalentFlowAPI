import RecruiterRepository from '../repositories/RecruiterRepository';
import { UpdateRecruiterDTO, CreateRecruiterDTO } from '../dto/RecruiterDTO';
import { Recruiter } from '../models/Recruiter';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class RecruiterService {
  private repository: RecruiterRepository;

  constructor(repository: RecruiterRepository) {
    this.repository = repository;
  }

  async create(data: CreateRecruiterDTO): Promise<Recruiter> {
    const result = await this.repository.create(data);

    return result
  }

  async getAll(): Promise<Recruiter[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Recruiter | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateRecruiterDTO): Promise<Recruiter | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Recruiter | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default RecruiterService;
