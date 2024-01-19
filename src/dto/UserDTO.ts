export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
  type: "Candidate" | "Recruiter";
  profile: string;

  constructor(Data: CreateUser) {
    this.name = Data.name;
    this.email = Data.email;
    this.password = Data.password;
    this.type = Data.type;
    this.profile = Data.profile;
  }
}

export class UpdateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  type: "Candidate" | "Recruiter";
  profile: string;

  constructor(Data: UpdateUser) {
    this.id = Data.id;
    this.name = Data.name;
    this.email = Data.email;
    this.password = Data.password;
    this.type = Data.type;
    this.profile = Data.profile;
  }
}

//TYPES

type CreateUser = {
  name: string;
  email: string;
  password: string;
  type: "Candidate" | "Recruiter";
  profile: string;
};

type UpdateUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  type: "Candidate" | "Recruiter";
  profile: string;
};
