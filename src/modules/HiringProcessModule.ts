import { Sequelize } from 'sequelize';
import HiringProcessRepository from '../repositories/HiringProcessRepository';
import HiringProcessService from '../services/HiringProcessService';
import HiringProcessController from '../controllers/HiringProcessController';
import { SequelizeConnection } from '../database/connection';

class HiringProcessModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new HiringProcessRepository(sequelize);
    const service = new HiringProcessService(repository);
    const controller = new HiringProcessController(service);

    return { controller, service, repository };
  }
}

export { HiringProcessModule };
