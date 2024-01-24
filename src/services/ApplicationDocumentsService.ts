import { Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { ModelStatic } from 'sequelize/types';
import ApplicationDocumentsRepository from '../repositories/ApplicationDocumentsRepository';
import { UpdateApplicationDocumentsDTO, CreateApplicationDocumentsDTO } from '../dto/ApplicationDocumentsDTO';
import { ApplicationDocuments } from '../models/ApplicationDocuments';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;
  private model: ModelStatic<ApplicationDocuments>;

  constructor(repository: ApplicationDocumentsRepository, sequelize: Sequelize) {
    this.repository = repository;
    this.model = sequelize.models.ApplicationDocuments as ModelStatic<ApplicationDocuments>;
  }

  async create(data: CreateApplicationDocumentsDTO): Promise<ApplicationDocuments> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ApplicationDocuments[]> {
    return await this.repository.findAll();
  }

  async getById(id: number): Promise<ApplicationDocuments | null> {
    return await this.repository.findById(id);
  }

  async update(id: number, data: UpdateApplicationDocumentsDTO): Promise<ApplicationDocuments | null> {
    return await this.repository.update(id, data);
  }

  async softDelete(id: number): Promise<ApplicationDocuments | null> {
    return await this.repository.softDelete(id);
  }
}

export default ApplicationDocumentsService;
