export interface CreateApplicationStatusDTO {
  status: string;
  additionalComments?: string;
  candidateId: number;
  hiringProcessId: number;
}

export interface UpdateApplicationStatusDTO {
  status?: string;
  additionalComments?: string;
  candidateId?: number;
  hiringProcessId?: number;
}
