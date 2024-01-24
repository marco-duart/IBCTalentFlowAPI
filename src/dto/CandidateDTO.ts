export interface CreateCandidateDTO {
  name: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  employee: boolean;
  resume?: string;
  portfolio?: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?:
    | {
        title: string;
        link: string;
      }[]
   ;
  employmentHistoryId?: number;
  userId: number;
}

export interface UpdateCandidateDTO {
  name?: string;
  email?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  employee?: boolean;
  resume?: string;
  portfolio?: string;
  academicHistory?: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?:
    | {
        title: string;
        link: string;
      }[]
   ;
  employmentHistoryId?: number;
  applicationStatusId?: number[];
  interviewsId?: number[];
  feedbackId?: number[];
  applicationDocumentsId?: number[];
  userId: number;
}
