import FeedbackRepository from '../repositories/FeedbackRepository';
import { UpdateFeedbackDTO, CreateFeedbackDTO } from '../dto/FeedbackDTO';
import { Feedback } from '../models/Feedback';

class FeedbackService {
  private repository: FeedbackRepository;

  constructor(repository: FeedbackRepository) {
    this.repository = repository;
  }

  async create(data: CreateFeedbackDTO): Promise<Feedback> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<Feedback[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Feedback | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateFeedbackDTO): Promise<Feedback | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Feedback | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default FeedbackService;
