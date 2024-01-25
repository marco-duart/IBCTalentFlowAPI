import { Sequelize } from 'sequelize';
import CompanyRepository from '../repositories/CompanyRepository';
import CompanyService from '../services/CompanyService';
import CompanyController from '../controllers/CompanyController';
import { SequelizeConnection } from '../database/connection';

class CompanyModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new CompanyRepository(sequelize);
    const service = new CompanyService(repository);
    const controller = new CompanyController(service);

    return { controller, service, repository };
  }
}

export { CompanyModule };
