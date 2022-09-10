import { FirebaseUser } from '@/models';

export const verifyUser = ({ accessToken }: FirebaseUser): Boolean => !!accessToken;

export const verifyExistSeniority = (seniority: string) => !!seniority;
