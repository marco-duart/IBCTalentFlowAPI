export class CreateHiringProcessDTO {
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];

  constructor(Data: CreateHiringProcess) {
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.stage = Data.stage;
    this.recruiter = Data.recruiter;
    this.status = Data.status;
    this.interviews = Data.interviews.map((id) => id);
    this.applicationStatus = Data.applicationStatus.map((id) => id);
    this.recruiters = Data.recruiters.map((id) => id);
  }
}

export class UpdateHiringProcessDTO {
  id: string;
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];

  constructor(Data: UpdateHiringProcess) {
    this.id = Data.id;
    this.startDate = Data.startDate;
    this.endDate = Data.endDate;
    this.stage = Data.stage;
    this.recruiter = Data.recruiter;
    this.status = Data.status;
    this.interviews = Data.interviews.map((id) => id);
    this.applicationStatus = Data.applicationStatus.map((id) => id);
    this.recruiters = Data.recruiters.map((id) => id);
  }
}

//TYPES

type CreateHiringProcess = {
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];
};

type UpdateHiringProcess = {
  id: string;
  startDate: Date;
  endDate: Date;
  stage: string;
  recruiter: string;
  status: string;
  interviews: string[];
  applicationStatus: string[];
  recruiters: string[];
};
