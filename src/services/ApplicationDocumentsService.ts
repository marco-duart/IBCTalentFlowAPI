import { Sequelize } from 'sequelize';
import { ModelStatic } from 'sequelize/types';
import ApplicationDocumentsRepository from '../repositories/ApplicationDocumentsRepository';
import { UpdateApplicationDocumentsDTO, CreateApplicationDocumentsDTO } from '../dto/ApplicationDocumentsDTO';
import { ApplicationDocumentsModel } from '../models/ApplicationDocuments';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;
  private model: ModelStatic<ApplicationDocumentsModel>;

  constructor(repository: ApplicationDocumentsRepository, sequelize: Sequelize) {
    this.repository = repository;
    this.model = sequelize.models.ApplicationDocuments as ModelStatic<ApplicationDocumentsModel>;
  }

  async create(data: CreateApplicationDocumentsDTO): Promise<ApplicationDocumentsModel> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ApplicationDocumentsModel[]> {
    return await this.repository.findAll();
  }

  async getById(id: string): Promise<ApplicationDocumentsModel | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateApplicationDocumentsDTO): Promise<ApplicationDocumentsModel | null> {
    return await this.repository.update(id, data);
  }

  async softDelete(id: string): Promise<ApplicationDocumentsModel | null> {
    return await this.repository.softDelete(id);
  }
}

export default ApplicationDocumentsService;
