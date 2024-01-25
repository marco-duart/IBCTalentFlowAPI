import { Sequelize } from 'sequelize';
import JobPostingRepository from '../repositories/JobPostingRepository';
import JobPostingService from '../services/JobPostingService';
import JobPostingController from '../controllers/JobPostingController';
import { SequelizeConnection } from '../database/connection';

class JobPostingModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new JobPostingRepository(sequelize);
    const service = new JobPostingService(repository);
    const controller = new JobPostingController(service);

    return { controller, service, repository };
  }
}

export { JobPostingModule };
