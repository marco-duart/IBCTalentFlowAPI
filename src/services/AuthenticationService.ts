import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import UserRepository from "../repositories/UserRepository";
import { AuthenticationDTO } from "../dto/authenticationDTO";
import { env } from "../config/env";

export class AuthenticationService {
  constructor(private userRepository: UserRepository ) {}

  async login(data: AuthenticationDTO) {

    const user = await this.userRepository.findByEmail(data.email)
    if (!user) {
      return {
        error: true,
        message: "Invalid credentials",
        status: 400
      }
    }


    const password = data.password ?? ""
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      return {
        error: true,
        message: "Invalid credentials",
        status: 400
      }
    }

    const payload = { id: user.id, email: user.email, role: user.role }
    const secretKey = env.JWT_SECRET_KEY
    const options = { expiresIn: '5h' }

    const token = sign(payload, secretKey, options)

    return { token, user }
  }
}
