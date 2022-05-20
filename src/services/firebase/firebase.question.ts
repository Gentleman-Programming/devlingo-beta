import { collection, addDoc, getDocs, doc, setDoc, query, updateDoc } from 'firebase/firestore';
import { IQuestion, seniority } from '@/models';
import { db } from './firebase.config';

export const addCollection = async (techName: string, path: seniority, data: IQuestion) => {
  try {
    const dbRef = collection(db, 'question');
    const collectionRef = collection(db, 'question', techName, path);

    return await Promise.all([
      setDoc(doc(dbRef, techName), { Title: techName }),
      addDoc(collectionRef, {
        seniority: collectionRef.id,
        techName, ...data
      }),
    ]);
  } catch (error) {
    return error;
  }
};

export const viewCollection = async (seniorityName: seniority) => {
  try {
    const findTech = await findOneTech();
    let data = <any>[];

    for(let { Title } of findTech){
      const q = query(collection(db, 'question', Title, seniorityName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
    }    

    return data;

  } catch (error) {
    return error;
  }
};

export const findOneTech = async () => {
  try {
    const q = query(collection(db, 'question'));
    const querySnapshot = await getDocs(q);
    let data = <any>[];

    querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

    return data;
  } catch (error) {
    return error;
  }
};

export const findAllTech = async () => {
  try {
    const TR = viewCollection(seniority.TR);
    const JR = viewCollection(seniority.JR);
    const SSR = viewCollection(seniority.SSR);
    const SR = viewCollection(seniority.SR);
    const tech: IQuestion[] = [];

    const questions = await Promise.all([TR, JR, SSR, SR]);
    questions.map((elem: IQuestion[]) => tech.push(...elem));

    return tech;
  } catch (error) {
    return error;    
  }
}

export const updateCollection = async () => {};
export const removeCollection = async () => {};
