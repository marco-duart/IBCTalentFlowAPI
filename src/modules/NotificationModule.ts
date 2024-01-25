import { Sequelize } from 'sequelize';
import NotificationRepository from '../repositories/NotificationRepository';
import NotificationService from '../services/NotificationService';
import NotificationsController from '../controllers/NotificationsController';
import { SequelizeConnection } from '../database/connection';

class NotificationModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new NotificationRepository(sequelize);
    const service = new NotificationService(repository);
    const controller = new NotificationsController(service);

    return { controller, service, repository };
  }
}

export { NotificationModule };
