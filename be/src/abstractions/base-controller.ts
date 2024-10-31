import { validationResult } from 'express-validator';
import { Request } from 'express';
import RequestValidationException from './request-validation-exceptions';

export abstract class BaseController {
  public requestValidator(request: Request) {
    const errors = validationResult(request);

    console.log(errors);

    if (!errors.isEmpty()) {
      throw new RequestValidationException(errors.array());
    }
  }
}
