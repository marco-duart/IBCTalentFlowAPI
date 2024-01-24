import ApplicationDocumentsRepository from '../repositories/ApplicationDocumentsRepository';
import { UpdateApplicationDocumentsDTO, CreateApplicationDocumentsDTO } from '../dto/ApplicationDocumentsDTO';
import { ApplicationDocuments } from '../models/ApplicationDocuments';

class ApplicationDocumentsService {
  private repository: ApplicationDocumentsRepository;

  constructor(repository: ApplicationDocumentsRepository) {
    this.repository = repository;
  }

  async create(data: CreateApplicationDocumentsDTO): Promise<ApplicationDocuments> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<ApplicationDocuments[]> {
    return await this.repository.findAll();
  }

  async getById(id: string): Promise<ApplicationDocuments | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateApplicationDocumentsDTO): Promise<ApplicationDocuments | null> {
    return await this.repository.update(parseInt(id), data);
  }

  async softDelete(id: string): Promise<ApplicationDocuments | null> {
    return await this.repository.softDelete(parseInt(id));
  }
}

export default ApplicationDocumentsService;
