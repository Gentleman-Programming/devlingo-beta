import { storage } from './';
import { ref, getDownloadURL, getBlob } from 'firebase/storage';

// TODO: esta madre aun no sirve help xd
export const getFileFirebaseStorage = async (url: string) => {
  const storageRef = ref(storage, 'js/senior/pipe.txt');
  const test = await getDownloadURL(storageRef);
  const req = await getBlob(storageRef);
};
