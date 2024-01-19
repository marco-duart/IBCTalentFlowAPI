export class CreateApplicationStatusDTO {
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;

  constructor(Data: CreateApplicationStatus) {
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = Data.candidate;
    this.hiringProcess = Data.hiringProcess;
  }
}

export class UpdateApplicationStatusDTO {
  id: string;
  status?: string;
  additionalComments?: string;
  candidate?: string;
  hiringProcess?: string;

  constructor(Data: UpdateApplicationStatus) {
    this.id = Data.id;
    this.status = Data.status;
    this.additionalComments = Data.additionalComments;
    this.candidate = Data.candidate;
    this.hiringProcess = Data.hiringProcess;
  }
}

//TYPES

type CreateApplicationStatus = {
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
};

type UpdateApplicationStatus = {
  id: string;
  status: string;
  additionalComments?: string;
  candidate: string;
  hiringProcess: string;
};
