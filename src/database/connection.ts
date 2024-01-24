import { Sequelize } from 'sequelize';
import { env } from '../config/env';
import { initUser } from '../models/User';

export class SequelizeConnection {
  static sequelize = new Sequelize({
    dialect: 'mysql',
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT),
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
  });

  static async sync() {
    try {
      await this.sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');

      initUser(this.sequelize);//UserModel

      await this.sequelize.sync();
      console.log('Models have been synchronized with the database.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  }
}
