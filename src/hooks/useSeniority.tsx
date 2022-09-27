import { useSelector, useDispatch } from 'react-redux';

import { AppStore } from '@/redux/store';
import { modifySeniority, resetSeniorities } from '@/redux';
import { ISeniority } from '@/models';

export const useSeniority = () => {
  const seniorities = useSelector(({ seniorities }: AppStore) => seniorities);
  const dispatch = useDispatch();

  const updateSeniority = (newSeniority: ISeniority): void => {
    dispatch(modifySeniority(newSeniority));
  };

  const restartSeniority = (): void => {
    dispatch(resetSeniorities());
  };

  return { seniorities, updateSeniority, restartSeniority };
};
