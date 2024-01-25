export interface CreateHiringProcessDTO {
  startDate: Date;
  endDate?: Date;
  stage: string;
  status: string;
  recruiterId: number;
  jobPostingId: number;
}

export interface UpdateHiringProcessDTO {
  startDate?: Date;
  endDate?: Date;
  stage?: string;
  status?: string;
  interviewsId?: number[];
  applicationStatusId?: number[];
}
