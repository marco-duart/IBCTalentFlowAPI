import { Sequelize } from 'sequelize';
import InterviewRepository from '../repositories/InterviewRepository';
import InterviewService from '../services/InterviewService';
import InterviewController from '../controllers/InterviewController';
import { SequelizeConnection } from '../database/connection';

class InterviewModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new InterviewRepository(sequelize);
    const service = new InterviewService(repository);
    const controller = new InterviewController(service);

    return { controller, service, repository };
  }
}

export { InterviewModule };
