export interface FirebaseUser {
  uid: string;
  accessToken: string;
  email: string;
  seniority: string;
  role: string;
  username: string;
}

export interface User {
  email: string;
  password: string;
  username?: string;
}
