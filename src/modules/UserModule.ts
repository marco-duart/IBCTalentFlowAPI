import { Sequelize } from 'sequelize';
import UserRepository from '../repositories/UserRepository';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import { SequelizeConnection } from '../database/connection';

class UserModule {
  static make() {
    const sequelize: Sequelize = SequelizeConnection.sequelize;
    const repository = new UserRepository(sequelize);
    const service = new UserService(repository);
    const controller = new UserController(service);

    return { controller, service, repository };
  }
}

export { UserModule };
