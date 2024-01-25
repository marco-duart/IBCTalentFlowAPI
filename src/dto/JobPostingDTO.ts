export interface CreateJobPostingDTO {
  title: string;
  description: string;
  requirements: string[];
  jobLocation: string;
  salary?: string;
  startDate?: Date;
  endDate?: Date;
  hiringProcess?: number[];
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
  hiringProcess?: number[];
}
