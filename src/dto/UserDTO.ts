type Role = "ti" | "admin" | "user";
export interface CreateUserDTO {
  name: string;
  cpf: string;
  email: string;
  password: string;
  role: Role;
  photo?: string;
  candidateId?: number;
  recruiterId?: number;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  photo?: string;
  candidateId?: number;
  recruiterId?: number;
}
