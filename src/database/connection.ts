import { Sequelize } from 'sequelize';
import { env } from '../config/env';
import { initUser } from '../models/User';

class SequelizeConnection {
  private static _sequelize: Sequelize;

  private constructor() {}

  static get sequelize(): Sequelize {
    if (!this._sequelize) {
      this.initialize();
    }
    return this._sequelize;
  }

  private static initialize(): void {
    this._sequelize = new Sequelize({
      dialect: 'mysql',
      host: env.DB_HOST,
      port: parseInt(env.DB_PORT),
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
    });

    this.authenticate();
    initUser(this._sequelize);
  }

  private static async authenticate(): Promise<void> {
    try {
      await this._sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  }

  static async sync(): Promise<void> {
    try {
      await this._sequelize.sync();
      console.log('Models have been synchronized with the database.');
    } catch (error) {
      console.error('Failed to synchronize with the database. Error:', error);
      throw error;
    }
  }
}

export { SequelizeConnection };
