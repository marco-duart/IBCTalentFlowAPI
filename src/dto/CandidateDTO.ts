export class CreateCandidateDTO {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio?: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills?: string[];
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  employmentHistory?: string;
  applicationStatus?: string[];
  interviews?: string[];
  feedback?: string[];
  applicationDocuments?: string[];

  constructor(Data: CreateCandidate) {
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = Data.employmentHistory;
    this.applicationStatus = Data.applicationStatus.map(
      (id) => id
    );
    this.interviews = Data.interviews.map((id) => id);
    this.feedback = Data.feedback.map((id) => id);
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => id
    );
  }
}

export class UpdateCandidateDTO {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
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
  professionalLinks?: {
    title: string;
    link: string;
  }[];
  employmentHistory?: string;
  applicationStatus?: string[];
  interviews?: string[];
  feedback?: string[];
  applicationDocuments?: string[];

  constructor(Data: UpdateCandidate) {
    this.id = Data.id;
    this.name = Data.name;
    this.email = Data.email;
    this.phoneNumber = Data.phoneNumber;
    this.resume = Data.resume;
    this.portfolio = Data.portfolio;
    this.academicHistory = Data.academicHistory;
    this.skills = Data.skills;
    this.professionalLinks = Data.professionalLinks;
    this.employmentHistory = Data.employmentHistory;
    this.applicationStatus = Data.applicationStatus.map(
      (id) => id
    );
    this.interviews = Data.interviews.map((id) => id);
    this.feedback = Data.feedback.map((id) => id);
    this.applicationDocuments = Data.applicationDocuments.map(
      (id) => id
    );
  }
}

//TYPES

type CreateCandidate = {
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: string;
  applicationStatus: string[];
  interviews: string[];
  feedback: string[];
  applicationDocuments: string[];
};

type UpdateCandidate = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolio: string;
  academicHistory: {
    title: string;
    institution: string;
    degree: string;
    startDate: Date;
    endDate: Date;
  }[];
  skills: string[];
  professionalLinks: {
    title: string;
    link: string;
  }[];
  employmentHistory: string;
  applicationStatus: string[];
  interviews: string[];
  feedback: string[];
  applicationDocuments: string[];
};
