import 'dotenv/config';
import { app } from './server';
import { env } from './config/env';
import { SequelizeConnection } from './database/connection';

(async () => {
  try {
    await SequelizeConnection.sync();
    app.listen(env.SERVER_PORT, () => {
      console.log(`Server is running on port ${env.SERVER_PORT} 🚀`);
    });
  } catch (error) {
    console.error(`Failed to start the server. Error: ${error}`);
  }
})();
