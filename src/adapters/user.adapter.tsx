import { FirebaseUser } from '@/models';

export const createAdaptedUser = (user: FirebaseUser) => {
  const formattedUser = {
    uid: user.uid,
    token: user.accessToken,
    email: user.email
  };

  return formattedUser;
};
