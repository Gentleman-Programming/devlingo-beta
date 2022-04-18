import type { FirebaseUser, User } from '@/models';
import type { UserCredential } from 'firebase/auth';

export const createAddaptedUser = async (user: UserCredential) => {
  const formattedUser: FirebaseUser = {
    email: user.user.email ?? '',
    uid: user.user.uid,
    token: await user.user.getIdToken()
  };

  return formattedUser;
};
