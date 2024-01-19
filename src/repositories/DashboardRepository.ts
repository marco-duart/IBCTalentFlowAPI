import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IDashboard } from '../models/Dashboard';

class DashboardRepository extends BaseRepository<IDashboard> {
  constructor(model: Model<IDashboard>) {
    super(model);
  }

}

export default DashboardRepository;
