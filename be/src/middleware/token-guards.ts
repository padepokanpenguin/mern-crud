import { NextFunction, Request, Response } from 'express';
import { BaseResponse } from '../abstractions/base-response';

const unguardedResources: Array<string> = ['/api/registration', '/api/login'];

export default async (request: Request, response: Response, next: NextFunction) => {
  if (unguardedResources.includes(request.baseUrl + request.path)) {
    next();
  } else {
    if (typeof request.headers.authorization == 'undefined') {
      return response.status(401).json(new BaseResponse('401', 'Unauthorized.'));
    } else {
      const token = request.headers.authorization;

      if (!token) {
        return response.status(401).json(new BaseResponse('403', 'Invalid access token.'));
      }

      next();
    }
  }
};
