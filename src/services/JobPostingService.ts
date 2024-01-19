import JobPostingRepository from '../repositories/JobPostingRepository';
import { UpdateJobPostingDTO, CreateJobPostingDTO } from '../dto/JobPostingDTO';
import { IJobPosting } from '../models/JobPosting';
import { Schema } from 'mongoose';

class JobPostingService {
  private repository: JobPostingRepository;

  constructor(repository: JobPostingRepository) {
    this.repository = repository;
  }

  async create(data: CreateJobPostingDTO): Promise<IJobPosting> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IJobPosting[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IJobPosting | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateJobPostingDTO): Promise<IJobPosting | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IJobPosting | null> {
    return await this.repository.softDelete(id)
  }

}

export default JobPostingService;
