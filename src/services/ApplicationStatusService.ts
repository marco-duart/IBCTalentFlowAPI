import ApplicationStatusRepository from '../repositories/ApplicationStatusRepository';
import { UpdateApplicationStatusDTO, CreateApplicationStatusDTO } from '../dto/ApplicationStatusDTO';
import { IApplicationStatus } from '../models/ApplicationStatus';
import { Schema } from 'mongoose';

class ApplicationStatusService {
  private repository: ApplicationStatusRepository;

  constructor(repository: ApplicationStatusRepository) {
    this.repository = repository;
  }

  async create(data: CreateApplicationStatusDTO): Promise<IApplicationStatus> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IApplicationStatus[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IApplicationStatus | null > {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateApplicationStatusDTO): Promise<IApplicationStatus | null > {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IApplicationStatus | null > {
    return await this.repository.softDelete(id)
  }

}

export default ApplicationStatusService;
