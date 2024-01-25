import { Sequelize } from 'sequelize';
import DashboardRepository from '../repositories/DashboardRepository';
import DashboardService from '../services/DashboardService';
import DashboardController from '../controllers/DashboardController';
import { SequelizeConnection } from '../database/connection';

class DashboardModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new DashboardRepository(sequelize);
    const service = new DashboardService(repository);
    const controller = new DashboardController(service);

    return { controller, service, repository };
  }
}

export { DashboardModule };
