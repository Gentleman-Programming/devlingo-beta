import { User } from 'firebase/auth';
import { Categories, FirebaseUser, Rol, Seniority } from '@/models';

export const createAddaptedUser = async ({ email, uid, accessToken, refreshToken, role, seniorityGlobal, test }: FirebaseUser) => {
  return {
    email,
    uid,
    refreshToken,
    role,
    seniorityGlobal,
    accessToken,
    test,
  };
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
    test: {
      name: Categories.General,
      progress: 1,
      pts: 0,
    },
  };
};
