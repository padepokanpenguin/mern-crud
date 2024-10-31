import express from 'express';
import AuthController from './AuthController';

const app = express.Router();

class AuthRoutes {
  public routes = (): express.Router => {
    app.post('/registration', AuthController.registrationContoller);
    app.post('/login', AuthController.loginContoller);
    return app;
  };
}

export default new AuthRoutes().routes();
