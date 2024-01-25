export interface CreateApplicationStatusDTO {
  status: string;
  candidateId: number;
  hiringProcessId: number;
  interviewIds?: number[];
  feedbackIds?: number[];
}

export interface UpdateApplicationStatusDTO {
  status?: string;
  interviewIds?: number[];
  feedbackIds?: number[];
}
