export interface CreateCandidateDTO {
  name: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  employee: boolean;
  resume?: string;
  portfolio?: string;
  documents: {
    documentName: string,
    documentNumber: string,
    issueDate: Date;
    location: string;
    image: string;
  }[];
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
  employmentHistory?:
    | {
        companyName: string;
        position: string;
        startDate: Date;
        endDate?: Date;
        achievements?: string[];
      }[]
   ;
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
  documents?: {
    documentName: string,
    documentNumber: string,
    issueDate: Date;
    location: string;
    image: string;
  }[];
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
  employmentHistory?:
    | {
        companyName: string;
        position: string;
        startDate: Date;
        endDate?: Date;
        achievements?: string[];
      }[]
   ;
}
