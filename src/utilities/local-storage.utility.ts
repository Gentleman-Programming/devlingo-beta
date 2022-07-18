import { localStorageEntities } from '@/models';

interface ILocalStorage<T> {
  data: T | T[];
  entity: localStorageEntities;
}

export const persistDataLocalStorage = <T>({ entity, data }: ILocalStorage<T>): void => {
  const body = JSON.stringify(data);
  localStorage.setItem(entity, body);
};

export const getDataLocalStorage = <T>(entity: localStorageEntities): T => {
  const data = localStorage.getItem(entity);
  return JSON.parse(data as string);
};
