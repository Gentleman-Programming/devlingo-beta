import { collection, addDoc, getDocs, doc, setDoc, query, updateDoc } from 'firebase/firestore';
import { IQuestion, seniority } from '@/models';
import { db } from './firebase.config';

export const addCollection = async (techName: string, path: seniority, data: IQuestion) => {
  try {
    const dbRef = collection(db, 'question');
    const collectionRef = collection(db, 'question', techName, path);

    return await Promise.all([
      setDoc(doc(dbRef, techName), { Title: techName }),
      addDoc(collectionRef, { seniority: collectionRef.id, techName, ...data }),
    ]);
  } catch (error) {
    return error;
  }
};

export const viewCollection = async (techName: string, seniorityName: seniority) => {
  try {
    const q = query(collection(db, 'question', techName, seniorityName));
    const querySnapshot = await getDocs(q);
    let data = <any>[];

    querySnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));

    return data;
  } catch (error) {
    return error;
  }
};

export const updateCollection = async () => {};
export const removeCollection = async () => {};
