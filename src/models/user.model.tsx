import { ITest, Seniority } from './';
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

export interface ICategory {
  pts: number;
  txt: Seniority;
  initialValue?: number;
}

export interface ISeniority {
  html?: ICategory;
  js?: ICategory;
  css?: ICategory;
  global?: Seniority;
}

export const enum Rol {
  User = 'user',
  Admin = 'admin',
}
