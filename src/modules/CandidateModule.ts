import { Sequelize } from 'sequelize';
import CandidateRepository from '../repositories/CandidateRepository';
import CandidateService from '../services/CandidateService';
import CandidateController from '../controllers/CandidateController';
import { SequelizeConnection } from '../database/connection';

class CandidateModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new CandidateRepository(sequelize);
    const service = new CandidateService(repository);
    const controller = new CandidateController(service);

    return { controller, service, repository };
  }
}

export { CandidateModule };
