import express from 'express';
import AuthRoute from './api/authentication/AuthRoute';
import AgendaRoute from './api/agenda/AgendaRoute';
const route = express.Router();

const routes: express.Router[] = [AuthRoute, AgendaRoute];

routes.forEach((r) => {
  route.use(r);
});

export default routes;
