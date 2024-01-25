import { Sequelize } from 'sequelize';
import FeedbackRepository from '../repositories/FeedbackRepository';
import FeedbackService from '../services/FeedbackService';
import FeedbackController from '../controllers/FeedbackController';
import { SequelizeConnection } from '../database/connection';

class FeedbackModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new FeedbackRepository(sequelize);
    const service = new FeedbackService(repository);
    const controller = new FeedbackController(service);

    return { controller, service, repository };
  }
}

export { FeedbackModule };
