const env = {
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: process.env.DB_PORT as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_DATABASE: process.env.DB_DATABASE as string,
  JWT_SECRET_KEY: process.env.JTW_SECRET_KEY as string
}

export { env }