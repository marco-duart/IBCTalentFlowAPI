import { Sequelize } from 'sequelize';
import ApplicationStatusRepository from '../repositories/ApplicationStatusRepository';
import ApplicationStatusService from '../services/ApplicationStatusService';
import ApplicationStatusController from '../controllers/ApplicationStatusController';
import { SequelizeConnection } from '../database/connection';

class ApplicationStatusModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new ApplicationStatusRepository(sequelize);
    const service = new ApplicationStatusService(repository);
    const controller = new ApplicationStatusController(service);

    return { controller, service, repository };
  }
}

export { ApplicationStatusModule };
