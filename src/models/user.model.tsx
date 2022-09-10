import { ITest } from './';
export interface FirebaseUser {
  uid: string;
  accessToken?: string;
  email: string;
  seniorityGlobal?: string;
  role: rol;
  username: string;
  refreshToken?: string;
  test: ITest;
}

export interface UserLogin {
  email: string;
  password: string;
}

export const enum rol {
  user = 'user',
  admin = 'admin',
}
