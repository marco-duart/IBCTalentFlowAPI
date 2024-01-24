import DashboardRepository from '../repositories/DashboardRepository';
import { UpdateDashboardDTO, CreateDashboardDTO } from '../dto/DashboardDTO';
import { Dashboard } from '../models/Dashboard';

class DashboardService {
  private repository: DashboardRepository;

  constructor(repository: DashboardRepository) {
    this.repository = repository;
  }

  async create(data: CreateDashboardDTO): Promise<Dashboard> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<Dashboard[]> {
    return this.repository.findAll()
  }

  async getById(id: string): Promise<Dashboard | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateDashboardDTO): Promise<Dashboard | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Dashboard | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default DashboardService;
