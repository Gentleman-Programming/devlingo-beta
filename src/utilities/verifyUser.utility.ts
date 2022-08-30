import { FirebaseUser, seniority as SENIORITY } from '@/models';

export const verifyUser = ({ accessToken, email, uid }: FirebaseUser): Boolean => {
  return accessToken?.trim() !== '' && email.trim() !== '' && uid.trim() !== '';
};

export const verifyExistSeniority = (seniority: string) => seniority.trim() !== SENIORITY.none;
