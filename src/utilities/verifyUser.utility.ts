import { FirebaseUser, seniority as SENIORITY } from '@/models';

export const verifyUser = ({ accessToken }: FirebaseUser): Boolean => {
  return !!accessToken;
};

export const verifyExistSeniority = (seniority: string) => !!seniority;
