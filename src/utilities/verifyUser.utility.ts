import { FirebaseUser } from '@/models';

export const verifyUser = ({ accessToken, email, uid }: FirebaseUser): Boolean => {
  if (accessToken || email || uid) {
    return true;
  }
  return false;
};
