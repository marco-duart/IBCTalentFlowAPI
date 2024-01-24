export interface CreateApplicationDocumentsDTO {
  resume: string | null | undefined;
  coverLetter?: string | null;
  relevantDocuments: string[] | null;
  candidateId: number | null;
  deletedAt?: Date | null;
}

export interface UpdateApplicationDocumentsDTO {
  resume?: string | null;
  coverLetter?: string | null;
  relevantDocuments?: string[] | null;
  candidateId?: number | null;
  deletedAt?: Date | null;
}
