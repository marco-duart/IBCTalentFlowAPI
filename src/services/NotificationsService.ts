import NotificationsRepository from '../repositories/NotificationsRepository';
import { UpdateNotificationDTO, CreateNotificationDTO } from '../dto/NotificationDTO';
import { Notification } from '../models/Notification';

class NotificationsService {
  private repository: NotificationsRepository;

  constructor(repository: NotificationsRepository) {
    this.repository = repository;
  }

  async create(data: CreateNotificationDTO): Promise<Notification> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<Notification[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<Notification | null> {
    return await this.repository.findById(parseInt(id));
  }

  async update(id: string, data: UpdateNotificationDTO): Promise<Notification | null> {
    return await this.repository.update(parseInt(id), data)
  }

  async softDelete(id: string): Promise<Notification | null> {
    return await this.repository.softDelete(parseInt(id))
  }

}

export default NotificationsService;
