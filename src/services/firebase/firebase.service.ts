// Import the functions you need from the SDKs you need
import { User } from '@/models';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth } from './firebase.config';

/**
 * @desc it calls the signup endpoint if the form is valid.
 * @param  User
 * @return Promise<UserCredentials>
 */
export const signup = async ({ email, password }: User) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * @desc it open a popup that allow to signin with google. This gives you a Google Access Token. You can use it to access the Google API.
 * @return Promise<UserCredentials>
 */
export const signinWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
  // return GoogleAuthProvider.credentialFromResult(result);
};

/**
 * @desc it open a popup that allow to signin with github. This gives you a GitHub Access Token. You can use it to access the Google API.
 * @return Promise<UserCredentials>
 */
export const signinWithGithub = async () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
  // const credential = GithubAuthProvider.credentialFromResult(result);
  // The signed-in user info.
};

// TODO
export const login = ({ email, password }: User) => signInWithEmailAndPassword(auth, email, password);
// TODO
export const logout = () => signOut(auth);
