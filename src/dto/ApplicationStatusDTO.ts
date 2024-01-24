export interface CreateApplicationStatusDTO {
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
}

export interface UpdateApplicationStatusDTO {
  status?: string;
  additionalComments?: string;
  candidate?: string;
  hiringProcess?: string;
}
