import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  is_login: boolean;
  last_login: Date;
}

const UserSchema = new Schema<IUser>({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  is_login: { type: Boolean, default: false },
  last_login: { type: Date, default: Date.now },
});

const User = model<IUser>('User', UserSchema);

export default User;
