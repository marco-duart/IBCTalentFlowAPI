export class CreateCompanyDTO {
    companyName: string;
    sector: string;
    companySize: number;
    companyLocation: string;
    contactInformation: {
      phoneNumber: string[];
      email: string[];
      companyLinks: {
        title: string;
        link: string;
      }[];
    };
    jobPostings: string;

  constructor(Data: CreateCompany) {
    this.companyName = Data.companyName;
    this.sector = Data.sector;
    this.companySize = Data.companySize
    this.companyLocation = Data.companyLocation
    this.contactInformation = Data.contactInformation
    this.jobPostings = Data.jobPostings;
  }
}

export class UpdateCompanyDTO {
  id: string;
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: string;

  constructor(Data: UpdateCompany) {
    this.id = Data.id;
    this.companyName = Data.companyName;
    this.sector = Data.sector;
    this.companySize = Data.companySize
    this.companyLocation = Data.companyLocation
    this.contactInformation = Data.contactInformation
    this.jobPostings = Data.jobPostings;
  }
}

//TYPES

type CreateCompany = {
    companyName: string;
    sector: string;
    companySize: number;
    companyLocation: string;
    contactInformation: {
      phoneNumber: string[];
      email: string[];
      companyLinks: {
        title: string;
        link: string;
      }[];
    };
    jobPostings: string;
};

type UpdateCompany = {
  id: string;
  companyName: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostings: string;
};
