import { IQuestion, seniority } from '@/models';
import { db } from './firebase.config';
import { collection, addDoc, getDocs, doc, query, updateDoc, deleteDoc } from 'firebase/firestore';

/**
 * Adding technology to the question database. If it exists, the specified information
 * is added, otherwise it will be created and added in the same way.
 * @param techName The technology to be added.
 * @param seniority The seniority you will have: (ENUM) TR | JR | SSR | SR .
 * @param data The data to be contained in each registered seniority document.
 * @returns void
 */
export const addCollection = async (techName: string, seniority: seniority, data: IQuestion) => {
  await addDoc(collection(db, 'questions'), {
    techName,
    seniority,
    example: null,
    ...data,
  });
};

/**
 * Show all data in the question collection.
 * @returns All data in the question collection in a promise.
 */
export const findAllTech = async (): Promise<IQuestion[]> => {
  const tech: any = [];

  const q = query(collection(db, 'questions'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => tech.push({ id: doc.id, ...doc.data() }));

  return tech;
};

/**
 * Updates the specified registrant data and seniority.
 * @param id Id of the document to be updated.
 * @param data Updated data to be recorded.
 * @returns void
 */
export const updateCollection = async (id: string, data: IQuestion) => {
  const updateRef = doc(db, 'questions', id);
  await updateDoc(updateRef, { ...data });
};

/**
 * Remove the specified registrant data and seniority.
 * @param id Id of the document to be removed.
 */
export const removeCollection = async (id: string) => {
  const removeDoc = doc(db, 'questions', id);
  await deleteDoc(removeDoc);
};
