export interface CreateApplicationDocumentsDTO {
  resume: string | null | undefined;
  coverLetter?: string;
  relevantDocuments: string[];
  candidateId: number;
  deletedAt?: Date;
}

export interface UpdateApplicationDocumentsDTO {
  resume?: string;
  coverLetter?: string;
  relevantDocuments?: string[];
  candidateId?: number;
  deletedAt?: Date;
}
