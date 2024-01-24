import HiringProcessRepository from '../repositories/HiringProcessRepository';
import { UpdateHiringProcessDTO, CreateHiringProcessDTO } from '../dto/HiringProcessDTO';
import { HiringProcess } from '../models/HiringProcess';

class HiringProcessService {
  private repository: HiringProcessRepository;

  constructor(repository: HiringProcessRepository) {
    this.repository = repository;
  }

  async create(data: CreateHiringProcessDTO): Promise<HiringProcess> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<HiringProcess[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<HiringProcess | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateHiringProcessDTO): Promise<HiringProcess | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<HiringProcess | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default HiringProcessService;
