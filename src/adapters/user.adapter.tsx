import { FirebaseUser } from '@/models';
import { User } from 'firebase/auth';
import { UserEmptyState } from '../redux/states/user';

export const createAddaptedUser = async (user: User) => {
  try {
    const formattedUser: FirebaseUser = {
      email: user.email ?? '',
      uid: user.uid ?? '',
      accessToken: await user.getIdToken(),
    };
    return formattedUser;
  } catch (_err) {
    return UserEmptyState;
  }
};
