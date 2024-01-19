import { Schema } from "mongoose";

export class CreateRecruiterDTO {
  name: string;
  email: string;
  position: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];

  constructor(Data: CreateRecruiter) {
    this.name = Data.name;
    this.email = Data.email;
    this.position = Data.position;
    this.contactInformation = Data.contactInformation;
    this.assignedCandidateList = Data.assignedCandidateList.map((id) => id)
		this.candidateFeedback = Data.candidateFeedback.map((id) => id)
    this.interviews = Data.interviews.map((id) => id)
    this.hiringProcesses = Data.hiringProcesses.map((id) => id)
  }
}

export class UpdateRecruiterDTO {
  id: string;
  name?: string;
  email?: string;
  position?: string;
  contactInformation?: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList?: string[];
  candidateFeedback?: string[];
  interviews?: string[];
  hiringProcesses?: string[];

  constructor(Data: UpdateRecruiter) {
    this.id = Data.id;
    this.name = Data.name;
    this.email = Data.email;
    this.position = Data.position;
    this.contactInformation = Data.contactInformation;
    this.assignedCandidateList = Data.assignedCandidateList.map((id) => id)
		this.candidateFeedback = Data.candidateFeedback.map((id) => id)
    this.interviews = Data.interviews.map((id) => id)
    this.hiringProcesses = Data.hiringProcesses.map((id) => id)
  }
}

//TYPES

type CreateRecruiter = {
  name: string;
  email: string;
  position: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];
};

type UpdateRecruiter = {
  id: string;
  name: string;
  email: string;
  position: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  assignedCandidateList: string[];
  candidateFeedback: string[];
  interviews: string[];
  hiringProcesses: string[];
};
