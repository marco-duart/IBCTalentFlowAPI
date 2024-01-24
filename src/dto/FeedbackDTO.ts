export interface CreateFeedbackDTO {
  feedbackTitle: Date;
  overallAssessment: number;
  specificComment: string;
  improvements?: string;
  candidateId: number;
  hiringProcessId: number;
}

export interface UpdateFeedbackDTO {
  feedbackTitle?: Date;
  overallAssessment?: number;
  specificComment?: string;
  improvements?: string;
}
