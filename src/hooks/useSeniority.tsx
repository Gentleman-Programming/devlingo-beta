import { useSelector, useDispatch } from 'react-redux';

import { AppStore } from '@/redux/store';
import { modifySeniority, resetSeniorities, createSeniorities } from '@/redux';
import { ISeniority } from '@/models';

export const useSeniority = () => {
  const seniorities = useSelector(({ seniorities }: AppStore) => seniorities);
  const dispatch = useDispatch();

  const CreateSeniorities = (newSeniorities: ISeniority) => {
    dispatch(createSeniorities(newSeniorities));
  };

  const UpdateSeniorities = (seniority: ISeniority): void => {
    dispatch(modifySeniority(seniority));
  };

  const RestartSeniorities = (): void => {
    dispatch(resetSeniorities());
  };

  return { seniorities, UpdateSeniorities, RestartSeniorities, CreateSeniorities };
};
