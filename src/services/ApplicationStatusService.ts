import ApplicationStatusRepository from '../repositories/ApplicationStatusRepository';
import { UpdateApplicationStatusDTO, CreateApplicationStatusDTO } from '../dto/ApplicationStatusDTO';
import { ApplicationStatus } from '../models/ApplicationStatus';

class ApplicationStatusService {
  private repository: ApplicationStatusRepository;

  constructor(repository: ApplicationStatusRepository) {
    this.repository = repository;
  }

  async create(data: CreateApplicationStatusDTO): Promise<ApplicationStatus> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ApplicationStatus[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ApplicationStatus | null > {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateApplicationStatusDTO): Promise<ApplicationStatus | null > {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<ApplicationStatus | null > {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default ApplicationStatusService;
