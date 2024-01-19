import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { INotifications } from '../models/Notifications';

class NotificationsRepository extends BaseRepository<INotifications> {
  constructor(model: Model<INotifications>) {
    super(model);
  }

}

export default NotificationsRepository;
