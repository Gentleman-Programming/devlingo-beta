import { User } from 'firebase/auth';
import { FirebaseUser, rol, seniority } from '@/models';
import { UserEmptyState } from '../redux/states/user';

export const createAddaptedUser = async ({ email, uid, getIdToken, refreshToken, role, seniorityGlobal }: User & FirebaseUser) => {
  try {
    return {
      email,
      uid,
      refreshToken,
      role,
      seniorityGlobal,
      accessToken: await getIdToken(),
    };
  } catch (_err) {
    return UserEmptyState;
  }
};

export const adapterNewUser = ({ email, uid }: User): FirebaseUser => {
  const indexTruncate = email?.indexOf('@') as number;
  const username = email?.substring(0, indexTruncate) as string;
  return {
    uid,
    username,
    role: rol.user,
    seniorityGlobal: seniority.JR,
    email: email as string,
  };
};
