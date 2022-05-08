import { localStorageEntities, FirebaseUser } from '@/models';

interface ILocalStorage {
  data: FirebaseUser;
  entity: localStorageEntities;
}

export const persistDataLocalStorage = ({ entity, data }: ILocalStorage): void => {
  const body = JSON.stringify(data);
  localStorage.setItem(entity, body);
};
