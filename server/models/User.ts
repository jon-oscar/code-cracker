import mongoose, { Document, Schema } from 'mongoose';
import { User } from '../../types/User';

export interface IUser extends Document {
  username: User['username'];
  email: User['email'];
  password: User['password'];
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
