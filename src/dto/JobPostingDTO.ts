export interface CreateJobPostingDTO {
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary?: string;
  startDate?: Date;
  endDate?: Date;
  companyId: number;
}

export interface UpdateJobPostingDTO {
  title?: string;
  description?: string;
  requirements?: string[];
  jobLocation?: string;
  salary?: string;
  startDate?: Date;
  endDate?: Date;
}
