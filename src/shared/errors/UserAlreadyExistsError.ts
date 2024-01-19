export class UserAlreadyExistsError extends Error {
  constructor(user: string) {
    super(`${user} already exists`);
  }
}
