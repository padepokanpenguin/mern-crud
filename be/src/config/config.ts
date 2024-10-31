import path from 'path';

export default {
  server: {
    hostname: process.env.SERVER_HOSTNAME ?? 'localhost',
    port: process.env.SERVER_PORT ?? 5000,
    app: process.env.APP_NAME ?? 'My App',
    env: process.env.APP_ENV ?? 'development',
  },
};
