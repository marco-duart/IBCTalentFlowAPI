export interface CreateInterviewDTO {
  dateTime: Date;
  interviewType: string;
  questions?: {
    question: string,
    answer: string,
  }[];
  interviewFeedback?: string;
  applicationStatusId: number;
  hiringProcessId: number;
  recruiterId: number;
}

export interface UpdateInterviewDTO {
  dateTime?: Date;
  interviewType?: string;
  questions?: {
    question: string,
    answer: string,
  }[];
  interviewFeedback?: string;
}