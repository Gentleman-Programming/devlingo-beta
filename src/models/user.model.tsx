export interface FirebaseUser {
  uid: string;
  accessToken: string;
  email: string;
}

export interface User {
  email: string;
  password: string;
  username?: string;
}
