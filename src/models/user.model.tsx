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
  seniorities: ISeniority;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface ICategory {
  pts: number;
  txt: string;
}

export interface ISeniority {
  html: ICategory;
  js: ICategory;
  css: ICategory;
}

export const enum Rol {
  User = 'user',
  Admin = 'admin',
}
