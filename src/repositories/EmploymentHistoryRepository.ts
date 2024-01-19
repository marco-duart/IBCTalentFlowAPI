import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IEmploymentHistory } from '../models/EmploymentHistory';

class EmploymentHistoryRepository extends BaseRepository<IEmploymentHistory> {
  constructor(model: Model<IEmploymentHistory>) {
    super(model);
  }

}

export default EmploymentHistoryRepository;
