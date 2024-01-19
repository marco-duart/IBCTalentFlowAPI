export class CreateInterviewDTO {
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;

  constructor(Data: CreateInterview) {
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = Data.candidate;
    this.hiringProcess = Data.hiringProcess;
    this.recruiter = Data.recruiter;
  }
}

export class UpdateInterviewDTO {
  id: string;
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;

  constructor(Data: UpdateInterview) {
    this.id = Data.id;
    this.dateTime = Data.dateTime;
    this.interviewType = Data.interviewType;
    this.interviewer = Data.interviewer;
    this.questions = Data.questions;
    this.answers = Data.answers;
    this.interviewFeedback = Data.interviewFeedback;
    this.candidate = Data.candidate;
    this.hiringProcess = Data.hiringProcess;
    this.recruiter = Data.recruiter;
  }
}

//TYPES

type CreateInterview = {
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;
};

type UpdateInterview = {
  id: string;
  dateTime: Date;
  interviewType: string;
  interviewer: {
    name: string;
    position: string;
  };
  questions: string[];
  answers: string[];
  interviewFeedback: string;
  candidate: string;
  hiringProcess: string;
  recruiter: string;
};
