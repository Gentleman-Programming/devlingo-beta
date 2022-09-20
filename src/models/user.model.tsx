import { ITest } from './';
export interface FirebaseUser {
  uid: string;
  accessToken?: string;
  email: string;
  seniorityGlobal?: string;
  role: Rol;
  username: string;
  refreshToken?: string;
  test: ITest;
}

export interface UserLogin {
  email: string;
  password: string;
}

export const enum Rol {
  User = 'user',
  Admin = 'admin',
}
