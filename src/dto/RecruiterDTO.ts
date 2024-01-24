export interface CreateRecruiterDTO {
  name: string;
  email: string;
  position: string;
  interviewsId: number[];
  hiringProcessesId: number[];
  userId: number;
}

export interface UpdateRecruiterDTO {
  name?: string;
  email?: string;
  position?: string;
}
