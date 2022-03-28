import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.config';
import { User } from '@/models';

export const LoginPasswordAndEmail = async ({ email, password }: User) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    return error;
  }
};
