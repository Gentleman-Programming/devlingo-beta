import { User } from 'firebase/auth';
import { UserEmptyState } from '../redux/states/user';

export const createAddaptedUser = async ({ email, uid, getIdToken }: User) => {
  try {
    return {
      email,
      uid,
      accessToken: await getIdToken(),
    };
  } catch (_err) {
    return UserEmptyState;
  }
};

export const adapterNewUser = ({ email, uid }: any) => {
  const indexTruncate = email.indexOf('@');
  const username = email.substring(0, indexTruncate);
  return {
    email,
    uid,
    username,
    role: 'user',
    seniorityGlobal: 'junior',
  };
};
