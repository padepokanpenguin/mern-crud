import express from 'express';
import AgendaController from './AgendaController';

const app = express.Router();

class AgendaRoutes {
  public routes = (): express.Router => {
    app.post('/agendas', AgendaController.addAgenda);
    app.get('/agendas', AgendaController.listAgendas);
    app.delete('/agenda/:email', AgendaController.delete);

    return app;
  };
}

export default new AgendaRoutes().routes();
