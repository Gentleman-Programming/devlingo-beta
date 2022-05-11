import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.config';
import { pathCollection, seniority } from '@/models';

export const addCollection = async (
    techName: string,
    path: pathCollection,
    newPath: seniority,
    data: Object
    ) => {
  try {
    const docRef = collection(db, `${path}/${techName}/${newPath}`);
    return await addDoc(docRef, { ...data });
  } catch (error) {
    return error;
  }
};

export const viewCollection = async () => {};
export const updateCollection = async () => {};
export const removeCollection = async () => {};
