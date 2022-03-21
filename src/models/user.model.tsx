export interface User {
  email: string;
  password: string;
  username?: string;
}

export interface FirebaseUser extends Partial<User> {
  uid: string;
  token: string;
}
