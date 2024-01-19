import HiringProcessRepository from '../repositories/HiringProcessRepository';
import { UpdateHiringProcessDTO, CreateHiringProcessDTO } from '../dto/HiringProcessDTO';
import { IHiringProcess } from '../models/HiringProcess';
import { Schema } from 'mongoose';

class HiringProcessService {
  private repository: HiringProcessRepository;

  constructor(repository: HiringProcessRepository) {
    this.repository = repository;
  }

  async create(data: CreateHiringProcessDTO): Promise<IHiringProcess> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IHiringProcess[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IHiringProcess | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateHiringProcessDTO): Promise<IHiringProcess | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IHiringProcess | null> {
    return await this.repository.softDelete(id)
  }

}

export default HiringProcessService;
