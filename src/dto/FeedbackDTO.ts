export class CreateFeedbackDTO {
  feedbackDate: Date;
  overallAssessment: string;
  specificComments: string;
  recommendation: string;

  constructor(Data: CreateFeedback) {
    this.feedbackDate = Data.feedbackDate;
    this.overallAssessment = Data.overallAssessment;
    this.specificComments = Data.specificComments;
    this.recommendation = Data.recommendation;
  }
}

export class UpdateFeedbackDTO {
  id: string;
  feedbackDate: Date;
  overallAssessment: string;
  specificComments: string;
  recommendation: string;

  constructor(Data: UpdateFeedback) {
    this.id = Data.id;
    this.feedbackDate = Data.feedbackDate;
    this.overallAssessment = Data.overallAssessment;
    this.specificComments = Data.specificComments;
    this.recommendation = Data.recommendation;
  }
}

//TYPES

type CreateFeedback = {
  feedbackDate: Date;
  overallAssessment: string;
  specificComments: string;
  recommendation: string;
};

type UpdateFeedback = {
  id: string;
  feedbackDate: Date;
  overallAssessment: string;
  specificComments: string;
  recommendation: string;
};
