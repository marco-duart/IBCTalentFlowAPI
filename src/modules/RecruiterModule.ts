import { Sequelize } from 'sequelize';
import RecruiterRepository from '../repositories/RecruiterRepository';
import RecruiterService from '../services/RecruiterService';
import RecruiterController from '../controllers/RecruiterController';
import { SequelizeConnection } from '../database/connection';

class RecruiterModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new RecruiterRepository(sequelize);
    const service = new RecruiterService(repository);
    const controller = new RecruiterController(service);

    return { controller, service, repository };
  }
}

export { RecruiterModule };
