import { Request, Response } from 'express';
import { BaseController } from '../../abstractions/base-controller';
import Agenda from '../../model/entity/Agenda';
import { BaseResponse } from '../../abstractions/base-response';

class AgendaController extends BaseController {
  listAgendas = async (request: Request, response: Response) => {
    try {
      const agenda = await Agenda.find();

      BaseResponse.ok(agenda, 'successfully get agendas', response);
    } catch (error: any) {
      BaseResponse.error(error.message || error, response);
    }
  };

  addAgenda = async (request: Request, response: Response) => {
    try {
      const { title, description, schedule_date, email } = request.body;

      const existingAgenda = await Agenda.findOne({ email });
      if (existingAgenda) throw new Error('Email was already registered to this agenda');

      const newAgenda = new Agenda({
        title,
        description,
        email,
        schedule_date,
      });

      await newAgenda.save();

      BaseResponse.ok(newAgenda, 'Successfully create new agenda', response);
    } catch (error: any) {
      BaseResponse.error(error.message || error, response);
    }
  };

  delete = async (request: Request, response: Response) => {
    try {
      const email = request.params.email;

      const agenda = await Agenda.findOne({ email });

      if (!agenda) throw new Error('Agenda was not found');

      await agenda.deleteOne();

      BaseResponse.ok(null, 'Successfully delete agenda', response);
    } catch (error: any) {
      BaseResponse.error(error.message || error, response);
    }
  };
}

export default new AgendaController();
