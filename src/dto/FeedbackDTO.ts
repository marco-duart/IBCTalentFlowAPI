export interface CreateFeedbackDTO {
  feedbackTitle: string;
  overallAssessment: number;
  specificComment: string;
  improvements?: string;
  applicationStatusId: number;
  hiringProcessId: number;
}

export interface UpdateFeedbackDTO {
  feedbackTitle?: string;
  overallAssessment?: number;
  specificComment?: string;
  improvements?: string;
}
