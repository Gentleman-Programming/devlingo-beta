import { FirebaseUser, UserLogin } from '@/models';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { setDoc, doc, collection, query, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase.config';
import { adapterNewUser } from '@/adapters';

/**
 * @desc create a new record in firestore db
 * @param data
 * @param path
 * @return void
 */
export const createRegisterInDb = async <T>(data: T, path: string, id: string): Promise<void> => {
  const ref = doc(db, path, id);
  await setDoc(ref, data);
};

export const findByUidInDb = async (uid: string, path: string) => {
  const ref = doc(db, path, uid);
  return await getDoc(ref);
};

export const LoginPasswordAndEmail = async ({ email, password }: UserLogin) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userDB = (await findByUidInDb(user.uid, 'users')).data();
  return { refreshToken: user.refreshToken, accessToken: await user.getIdToken(), ...(userDB as FirebaseUser) };
};

/**
 * @desc it calls the signup endpoint if the form is valid.
 * @param  User
 * @return Promise<UserCredentials>
 */
export const signup = async ({ email, password }: UserLogin) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const formatUser = adapterNewUser(user);
  createRegisterInDb<FirebaseUser>(formatUser, 'users', formatUser.uid);
};

/**
 * @desc it open a popup that allow to signin with google. This gives you a Google Access Token. You can use it to access the Google API.
 * @return Promise<UserCredentials>
 */
export const signinWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
  // return GoogleAuthProvider.credentialFromResult(result);
};

/**
 * @desc it open a popup that allow to signin with github. This gives you a GitHub Access Token. You can use it to access the Google API.
 * @return Promise<UserCredentials>
 */
export const signinWithGithub = async () => {
  const provider = new GithubAuthProvider();
  return await signInWithPopup(auth, provider);
  // const credential = GithubAuthProvider.credentialFromResult(result);
  // The signed-in user info.
};

// TODO
export const logout = () => signOut(auth);
