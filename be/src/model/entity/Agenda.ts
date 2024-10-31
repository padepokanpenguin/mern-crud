import { Schema, model, Document } from 'mongoose';

interface IAgenda extends Document {
  title: string;
  email: string;
  description: string;
  date: Date;
  createdAt: Date;
}

const AgendaSchema = new Schema<IAgenda>({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Agenda = model<IAgenda>('Agenda', AgendaSchema);

export default Agenda;
