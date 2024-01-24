import NotificationsRepository from '../repositories/NotificationsRepository';
import { UpdateNotificationsDTO, CreateNotificationsDTO } from '../dto/NotificationsDTO';
import { INotifications } from '../models/Notification';
import { Schema } from 'mongoose';

class NotificationsService {
  private repository: NotificationsRepository;

  constructor(repository: NotificationsRepository) {
    this.repository = repository;
  }

  async create(data: CreateNotificationsDTO): Promise<INotifications> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<INotifications[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<INotifications | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateNotificationsDTO): Promise<INotifications | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<INotifications | null> {
    return await this.repository.softDelete(id)
  }

}

export default NotificationsService;
