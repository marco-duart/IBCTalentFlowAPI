import 'dotenv/config';
import { app } from './server';
import { env } from './config/env';
import { SequelizeConnection } from './database/connection';

SequelizeConnection.sync().then(() => {
  app.listen(env.DB_PORT, () => {
    console.log(`Server is running on port ${env.DB_PORT} 🚀`);
  });
}).catch((error) => {
  console.error(`Failed to synchronize with database. Error: ${error}`);
});