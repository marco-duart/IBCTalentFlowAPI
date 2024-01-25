import { Sequelize } from 'sequelize';

// MODELS
import { ApplicationStatus } from '../models/ApplicationStatus';
import { Candidate } from '../models/Candidate';
import { Company } from '../models/Company';
import { Dashboard } from '../models/Dashboard';
import { Feedback } from '../models/Feedback';
import { HiringProcess } from '../models/HiringProcess';
import { Interview } from '../models/Interview';
import { JobPosting } from '../models/JobPosting';
import { Notification } from '../models/Notification';
import { Recruiter } from '../models/Recruiter';
import { User } from '../models/User';

export const initAssociations = () => {
  ApplicationStatus.belongsTo(Candidate, {
    foreignKey: 'candidateId',
    targetKey: 'id',
    as: 'candidate',
  });

  ApplicationStatus.belongsTo(HiringProcess, {
    foreignKey: 'hiringProcessId',
    targetKey: 'id',
    as: 'hiringProcess',
  });

  ApplicationStatus.hasMany(Feedback, {
    foreignKey: 'applicationStatusId',
    as: 'feedbacks',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  ApplicationStatus.hasMany(Interview, {
    foreignKey: 'applicationStatusId',
    as: 'interviews',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  Candidate.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'user',
  });

  Candidate.hasMany(ApplicationStatus, {
    foreignKey: 'candidateId',
    as: 'applications',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  Company.hasMany(JobPosting, {
    foreignKey: 'companyId',
    as: 'jobPostings',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  Feedback.belongsTo(ApplicationStatus, {
    foreignKey: 'applicationStatusId',
    targetKey: 'id',
    as: 'applicationStatus',
  });

  Feedback.belongsTo(HiringProcess, {
    foreignKey: 'hiringProcessId',
    targetKey: 'id',
    as: 'hiringProcess',
  });

  HiringProcess.belongsTo(Recruiter, {
    foreignKey: 'recruiterId',
    targetKey: 'id',
    as: 'recruiter',
  });

  HiringProcess.belongsTo(JobPosting, {
    foreignKey: 'jobPostingId',
    targetKey: 'id',
    as: 'jobPosting',
  });

  HiringProcess.hasMany(ApplicationStatus, {
    foreignKey: 'hiringProcessId',
    as: 'candidateStatus',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  HiringProcess.hasMany(Interview, {
    foreignKey: 'hiringProcessId',
    as: 'interviews',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  Interview.belongsTo(Recruiter, {
    foreignKey: 'recruiterId',
    targetKey: 'id',
    as: 'recruiter',
  });

  Interview.belongsTo(ApplicationStatus, {
    foreignKey: 'applicationStatusId',
    targetKey: 'id',
    as: 'applicationStatus',
  });

  Interview.belongsTo(HiringProcess, {
    foreignKey: 'hiringProcessId',
    targetKey: 'id',
    as: 'hiringProcess',
  });

  JobPosting.hasMany(HiringProcess, {
    foreignKey: 'jobPostingId',
    as: 'hiringProcesses',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  JobPosting.belongsTo(Company, {
    foreignKey: 'companyId',
    targetKey: 'id',
    as: 'company',
  });

  Recruiter.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
    as: 'user',
  });

  Recruiter.hasMany(Interview, {
    foreignKey: 'recruiterId',
    as: 'interviews',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  Recruiter.hasMany(HiringProcess, {
    foreignKey: 'recruiterId',
    as: 'hiringProcesses',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  User.hasOne(Candidate, {
    foreignKey: 'userId',
    as: 'candidate',
  });

  User.hasOne(Recruiter, {
    foreignKey: 'userId',
    as: 'recruiter',
  });
};
