import { User } from 'firebase/auth';
import { FirebaseUser, Rol, Seniority } from '@/models';
import { UserEmptyState } from '../redux/states/user';

export const createAddaptedUser = async ({ email, uid, accessToken, refreshToken, role, seniorityGlobal }: FirebaseUser) => {
  try {
    return {
      email,
      uid,
      refreshToken,
      role,
      seniorityGlobal,
      accessToken,
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
    role: Rol.User,
    seniorityGlobal: Seniority.None,
    email: email as string,
  };
};
