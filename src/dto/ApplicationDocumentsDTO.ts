export class CreateApplicationDocumentsDTO {
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;

  constructor(Data: CreateApplicationDocuments) {
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = Data.candidate;
  }
}

export class UpdateApplicationDocumentsDTO {
  id: string;
  resume?: string;
  coverLetter?: string;
  relevantDocuments?: string[];
  candidate?: string;

  constructor(Data: UpdateApplicationDocuments) {
    this.id = Data.id;
    this.resume = Data.resume;
    this.coverLetter = Data.coverLetter;
    this.relevantDocuments = Data.relevantDocuments;
    this.candidate = Data.candidate;
  }
}

//TYPES

type CreateApplicationDocuments = {
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};

type UpdateApplicationDocuments = {
  id: string;
  resume?: string;
  coverLetter: string;
  relevantDocuments: string[];
  candidate: string;
};
