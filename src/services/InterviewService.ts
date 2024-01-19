import InterviewRepository from '../repositories/InterviewRepository';
import { UpdateInterviewDTO, CreateInterviewDTO } from '../dto/InterviewDTO';
import { IInterview } from '../models/Interview';
import { Schema } from 'mongoose';

class InterviewService {
  private repository: InterviewRepository;

  constructor(repository: InterviewRepository) {
    this.repository = repository;
  }

  async create(data: CreateInterviewDTO): Promise<IInterview> {
    return await this.repository.create(data);
  }

  async getAll(): Promise<IInterview[]> {
    return await this.repository.findAll()
  }

  async getById(id: string): Promise<IInterview | null> {
    return await this.repository.findById(id);
  }

  async update(id: string, data: UpdateInterviewDTO): Promise<IInterview | null> {
    return await this.repository.update(id, data)
  }

  async softDelete(id: string): Promise<IInterview | null> {
    return await this.repository.softDelete(id)
  }

}

export default InterviewService;
