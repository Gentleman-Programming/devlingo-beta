import { FirebaseUser } from '@/models';

export const createAdaptedUser = ({ uid, accessToken, email }: FirebaseUser) => {
  if (!uid || !accessToken || email) return false;

  const formattedUser = {
    uid: uid,
    token: accessToken,
    email: email
  };

  return formattedUser;
};
