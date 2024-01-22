import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { IRecruiter } from '../models/Recruiter';

class RecruiterRepository extends BaseRepository<IRecruiter> {
  constructor(model: Model<IRecruiter>) {
    super(model);
  }

  // async findByEmail(email: string): Promise<T | null> {
  //   try {
  //     const document = await this.model.findOne({ where: { email } });
  //     if (!document) {
  //       throw new Error(`Email ${email} - Item not found`);
  //     }
  //     return document;
  //   } catch (error) {
  //     console.error(`Error finding document by email ${email}:`, error);
  //     throw new Error(`Failed to find item by email ${email}`);
  //   }
  // }

}

export default RecruiterRepository;
