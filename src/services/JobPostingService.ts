import JobPostingRepository from '../repositories/JobPostingRepository';
import { UpdateJobPostingDTO, CreateJobPostingDTO } from '../dto/JobPostingDTO';
import { JobPosting } from '../models/JobPosting';

class JobPostingService {
  private repository: JobPostingRepository;

  constructor(repository: JobPostingRepository) {
    this.repository = repository;
  }

  async create(data: CreateJobPostingDTO): Promise<JobPosting> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<JobPosting[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<JobPosting | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateJobPostingDTO): Promise<JobPosting | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<JobPosting | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default JobPostingService;
