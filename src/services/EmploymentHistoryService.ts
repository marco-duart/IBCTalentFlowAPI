import EmploymentHistoryRepository from '../repositories/EmploymentHistoryRepository';
import { UpdateEmploymentHistoryDTO, CreateEmploymentHistoryDTO } from '../dto/EmploymentHistoryDTO';
import { IEmploymentHistory } from '../models/EmploymentHistory';
import { Schema } from 'mongoose';

class EmploymentHistoryService {
  private repository: EmploymentHistoryRepository;

  constructor(repository: EmploymentHistoryRepository) {
    this.repository = repository;
  }

  async create(data: CreateEmploymentHistoryDTO): Promise<IEmploymentHistory> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IEmploymentHistory[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IEmploymentHistory | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateEmploymentHistoryDTO): Promise<IEmploymentHistory | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IEmploymentHistory | null> {
    return await this.repository.softDelete(id)
  }

}

export default EmploymentHistoryService;
