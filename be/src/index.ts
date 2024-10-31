import express, { NextFunction, Request, Response } from 'express';
require('dotenv').config();
import { BaseResponse } from './abstractions/base-response';
import ApiError from './abstractions/api-error';
import config from './config/config';
import middleware from './middleware';
import routes from './routes';
import './config/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request: Request, response: Response) => {
  const date = new Date();

  const data = {
    app: config.server.app,
    app_time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    time: date.toLocaleString(),
  };

  BaseResponse.ok(data, 'This service is running', response);
});

middleware.forEach((e: (req: Request, res: Response, next: NextFunction) => void) => app.use(e));
app.use('/api', routes);

app.use((error: ApiError, request: Request, response: Response, next: NextFunction) => {
  if (error) {
    BaseResponse.error('Internal Server Error', response, error.status.toString() || '500');
    // handleError(response, error);
  } else {
    next();
  }
});

app.listen(config.server.port, () => {
  console.log('Server is running on port ' + config.server.port + '...');
});
