import { collection, addDoc, getDocs, doc, setDoc, query, updateDoc } from 'firebase/firestore';
import { IQuestion, seniority } from '@/models';
import { db } from './firebase.config';

/**
 * Adding technology to the question database. If it exists, the specified information
 * is added, otherwise it will be created and added in the same way.
 * @param techName The technology to be added.
 * @param seniority The seniority you will have: (ENUM) TR | JR | SSR | SR .
 * @param data The data to be contained in each registered seniority document.
 * @returns void
 */
export const addCollection = async (
  techName: string,
  seniority: seniority,
  data: IQuestion
  ): Promise<void> => {
  try {
    const dbRef = collection(db, 'question');
    const collectionRef = collection(db, 'question', techName, seniority);

    await Promise.all([
      setDoc(doc(dbRef, techName), { Title: techName }),
      addDoc(collectionRef, {
        seniority: collectionRef.id,
        techName,
        ...data,
      }),
    ]);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Displays all the data of the registered technologies.
 * @param seniorityName Receives the seniority: (ENUM) TR | JR | SSR | SR .
 * @returns All technologies registered with the seniority specified by parameter.
 */
export const viewCollection = async (seniorityName: seniority): Promise<any> => {
  let data: any = [];

  try {
    const findTech = await findOneTech();

    for (let { Title } of findTech) {
      const q = query(collection(db, 'question', Title, seniorityName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
    }
  } catch (error) {
    console.error(error);
  }
  return data;
};

/**
 * Show all the names of the technologies in the collection of questions.
 * @returns All the names of the existing technologies in the collection question.
 */
export const findOneTech = async (): Promise<any> => {
  const tech: any = [];

  try {
    const q = query(collection(db, 'question'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => tech.push({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
  return tech;
};

/**
 * Show all data in the question collection.
 * @returns All data in the question collection in a promise.
 */
export const findAllTech = async (): Promise<IQuestion[]> => {
  const tech: IQuestion[] = [];

  try {
    const TR = viewCollection(seniority.TR);
    const JR = viewCollection(seniority.JR);
    const SSR = viewCollection(seniority.SSR);
    const SR = viewCollection(seniority.SR);

    const questions = await Promise.all([TR, JR, SSR, SR]);
    questions.map((elem: IQuestion[]) => tech.push(...elem));
  } catch (error) {
    console.error(error);
  }
  return tech;
};

/**
 * Updates the specified registrant data and seniority.
 * @param techName The technology to be updated.
 * @param seniority Current seniority: (ENUM) TR | JR | SSR | SR | SR .
 * @param data Updated data to be recorded.
 * @returns void
 */
export const updateCollection = async (
  techName: string,
  seniority: seniority,
  id: string,
  data: IQuestion
  ): Promise<void> => {
  try {
    const updateRef = doc(db, 'question', techName, seniority, id);
    await updateDoc(updateRef, { ...data });
  } catch (error) {
    console.log(error);
  }
};
export const removeCollection = async () => {};
