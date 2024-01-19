import CompanyRepository from '../repositories/CompanyRepository';
import { UpdateCompanyDTO, CreateCompanyDTO } from '../dto/CompanyDTO';
import { ICompany } from '../models/Company';
import { Schema } from 'mongoose';

class CompanyService {
  private repository: CompanyRepository;

  constructor(repository: CompanyRepository) {
    this.repository = repository;
  }

  async create(data: CreateCompanyDTO): Promise<ICompany> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ICompany[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<ICompany | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateCompanyDTO): Promise<ICompany | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<ICompany | null> {
    return await this.repository.softDelete(id)
  }

}

export default CompanyService;
