import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IRecruiter } from '../models/Recruiter';

class RecruiterRepository extends BaseRepository<IRecruiter> {
  constructor(model: Model<IRecruiter>) {
    super(model);
  }

}

export default RecruiterRepository;
