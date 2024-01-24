import CandidateRepository from '../repositories/CandidateRepository';
import { UpdateCandidateDTO, CreateCandidateDTO } from '../dto/CandidateDTO';
import { Candidate } from '../models/Candidate';
import { UserAlreadyExistsError } from '../shared/errors/UserAlreadyExistsError';


class CandidateService {
  private repository: CandidateRepository;

  constructor(repository: CandidateRepository) {
    this.repository = repository;
  }

  async create(data: CreateCandidateDTO): Promise<Candidate> {
    const result = await this.repository.create(data);

    return result
  }

  async getAll(): Promise<Candidate[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Candidate | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateCandidateDTO): Promise<Candidate | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Candidate | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default CandidateService;
