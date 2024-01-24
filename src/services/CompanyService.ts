import CompanyRepository from '../repositories/CompanyRepository';
import { UpdateCompanyDTO, CreateCompanyDTO } from '../dto/CompanyDTO';
import { Company } from '../models/Company';

class CompanyService {
  private repository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.repository = repository;
  }

  async create(data: CreateCompanyDTO): Promise<Company> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<Company[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Company | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateCompanyDTO): Promise<Company | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Company | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default CompanyService;
