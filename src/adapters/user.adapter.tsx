import type { FirebaseUser, User } from '@/models';
import type { UserCredential } from 'firebase/auth';
import { UserEmptyState } from '../redux/states/user';

export const createAddaptedUser = async (user: UserCredential) => {
  try {
    const formattedUser: FirebaseUser = {
      email: user.user.email ?? '',
      uid: user.user.uid ?? '',
      token: await user.user.getIdToken()
    };
    return formattedUser;
  } catch (err) {
    return UserEmptyState;
  }
};
