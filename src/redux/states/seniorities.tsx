import { createSlice } from '@reduxjs/toolkit';

import { persistDataLocalStorage, getDataLocalStorage } from '@/utilities';
import { localStorageEntities, ISeniority, Seniority } from '@/models';

export const emptySeniorities: ISeniority = {
  html: {
    pts: 0,
    txt: Seniority.TR,
    initialValue: 0,
  },
  css: {
    pts: 0,
    txt: Seniority.TR,
    initialValue: 0,
  },
  js: {
    pts: 0,
    txt: Seniority.TR,
    initialValue: 0,
  },
  global: Seniority.TR,
};

export const senioritiesSlice = createSlice({
  name: 'seniorities',
  initialState: getDataLocalStorage<ISeniority>(localStorageEntities.seniorities) || emptySeniorities,
  reducers: {
    modifySeniority: (state, { payload }) => {
      const seniorityUpdated: ISeniority = { ...state, ...payload };
      persistDataLocalStorage({
        data: seniorityUpdated,
        entity: localStorageEntities.seniorities,
      });
      return seniorityUpdated;
    },
    resetSeniorities: () => {
      persistDataLocalStorage({
        data: emptySeniorities,
        entity: localStorageEntities.seniorities,
      });
      return emptySeniorities;
    },
  },
});

export const { resetSeniorities, modifySeniority } = senioritiesSlice.actions;

export default senioritiesSlice.reducer;
