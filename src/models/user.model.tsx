export interface FirebaseUser {
  uid: string;
  token: string;
  email: string;
}

export interface User {
  email: string;
  password: string;
  username?: string;
}
