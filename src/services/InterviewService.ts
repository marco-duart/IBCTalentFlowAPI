import InterviewRepository from '../repositories/InterviewRepository';
import { UpdateInterviewDTO, CreateInterviewDTO } from '../dto/InterviewDTO';
import { Interview } from '../models/Interview';

class InterviewService {
  private repository: InterviewRepository;

  constructor(repository: InterviewRepository) {
    this.repository = repository;
  }

  async create(data: CreateInterviewDTO): Promise<Interview> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<Interview[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Interview | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateInterviewDTO): Promise<Interview | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Interview | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default InterviewService;
