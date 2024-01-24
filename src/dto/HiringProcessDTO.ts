export interface CreateHiringProcessDTO {
  startDate: Date;
  endDate?: Date;
  stage: string;
  status: string;
  recruiterId: number;
}

export interface UpdateHiringProcessDTO {
  startDate?: Date;
  endDate?: Date;
  stage?: string;
  status?: string;
  recruiterId?: number;
  interviewsId?: number[];
  candidatesId?: number[];
  applicationStatusId?: number[];
}
