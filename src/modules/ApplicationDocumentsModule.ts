import { Sequelize } from 'sequelize';
import ApplicationDocumentsRepository from '../repositories/ApplicationDocumentsRepository';
import ApplicationDocumentsService from '../services/ApplicationDocumentsService';
import ApplicationDocumentsController from '../controllers/ApplicationDocumentsController';
import { SequelizeConnection } from '../database/connection';

class ApplicationDocumentsModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new ApplicationDocumentsRepository(sequelize);
    const service = new ApplicationDocumentsService(repository);
    const controller = new ApplicationDocumentsController(service);

    return { controller, service, repository };
  }
}

export { ApplicationDocumentsModule };
