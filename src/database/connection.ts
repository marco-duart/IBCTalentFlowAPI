import { Sequelize } from 'sequelize';
import { env } from '../config/env';

//MODEL INIT IMPORTS
import { initApplicationStatus } from '../models/ApplicationStatus';
import { initCandidate } from '../models/Candidate';
import { initCompany } from '../models/Company';
import { initDashboard } from '../models/Dashboard';
import { initFeedback } from '../models/Feedback';
import { initHiringProcess } from '../models/HiringProcess';
import { initInterview } from '../models/Interview';
import { initJobPosting } from '../models/JobPosting';
import { initNotification } from '../models/Notification';
import { initRecruiter } from '../models/Recruiter';
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
    //MODELS INITIALIZE
    initApplicationStatus(this._sequelize);
    initCandidate(this._sequelize);
    initCompany(this._sequelize);
    initDashboard(this._sequelize);
    initFeedback(this._sequelize);
    initHiringProcess(this._sequelize);
    initInterview(this._sequelize);
    initJobPosting(this._sequelize);
    initNotification(this._sequelize);
    initRecruiter(this._sequelize);
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
