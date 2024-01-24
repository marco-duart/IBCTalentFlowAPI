// import * as yup from 'yup';

// export interface ICreateCandidate {
//   name: string;
//   email: string;
//   phoneNumber?: string | undefined;
//   resume?: string | undefined;
//   portfolio?: string | undefined;
//   academicHistory?: {
//     title: string;
//     institution: string;
//     degree: string;
//     startDate: Date;
//     endDate: Date;
//   }[] | undefined;
//   skills?: string[] | undefined;
//   professionalLinks?: {
//     title: string;
//     link: string;
//   }[] | undefined;
//   user: string;
//   employmentHistory?: string | undefined;
//   applicationStatus?: string[] | undefined;
//   interviews?: string[] | undefined;
//   feedback?: string[] | undefined;
//   applicationDocuments?: string[] | undefined;
// }

// export const createCandidateValidate: yup.Schema<ICreateCandidate> = yup.object().shape({
//   name: yup.string().required().min(3),
//   email: yup.string().required().email(),
//   phoneNumber: yup.string().nullable(),
//   resume: yup.string().nullable(),
//   portfolio: yup.string().nullable(),
//   academicHistory: yup.array().of(
//     yup.object().shape({
//       title: yup.string().required(),
//       institution: yup.string().required(),
//       degree: yup.string().required(),
//       startDate: yup.date().required(),
//       endDate: yup.date().required(),
//     })
//   ).nullable(),
//   skills: yup.array().of(yup.string()).nullable(),
//   professionalLinks: yup.array().of(
//     yup.object().shape({
//       title: yup.string().required(),
//       link: yup.string().required(),
//     })
//   ).nullable(),
//   user: yup.string().required(),
//   employmentHistory: yup.string().nullable(),
//   applicationStatus: yup.array().of(yup.string()).nullable(),
//   interviews: yup.array().of(yup.string()).nullable(),
//   feedback: yup.array().of(yup.string()).nullable(),
//   applicationDocuments: yup.array().of(yup.string()).nullable(),
// });
