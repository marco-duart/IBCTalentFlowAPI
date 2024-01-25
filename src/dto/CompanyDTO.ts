export interface CreateCompanyDTO {
  companyName: string;
  cnpj: string;
  sector: string;
  companySize: number;
  companyLocation: string;
  contactInformation?: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
}

export interface UpdateCompanyDTO {
  companyName?: string;
  cnpj?: string;
  sector?: string;
  companySize?: number;
  companyLocation?: string;
  contactInformation?: {
    phoneNumber: string[];
    email: string[];
    companyLinks: {
      title: string;
      link: string;
    }[];
  };
  jobPostingIds?: string;
}
