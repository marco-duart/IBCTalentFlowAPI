import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IFeedback } from '../models/Feedback';

class FeedbackRepository extends BaseRepository<IFeedback> {
  constructor(model: Model<IFeedback>) {
    super(model);
  }

}

export default FeedbackRepository;
