import { createSlice } from '@reduxjs/toolkit';

import { persistDataLocalStorage, getDataLocalStorage } from '@/utilities';
import { localStorageEntities, ISeniority, Seniority } from '@/models';

export const emptySeniorities: ISeniority = {
  Html5: {
    pts: 1000,
    txt: Seniority.SR,
  },
  css: {
    pts: 1000,
    txt: Seniority.SR,
  },
  JavaScript: {
    pts: 1000,
    txt: Seniority.SR,
  },
  global: Seniority.SR,
};

export const senioritiesSlice = createSlice({
  name: 'seniorities',
  initialState: getDataLocalStorage<ISeniority>(localStorageEntities.seniorities) || emptySeniorities,
  reducers: {
    createSeniorities: (_, { payload }) => {
      persistDataLocalStorage<ISeniority>({
        data: payload,
        entity: localStorageEntities.seniorities,
      });
      return payload;
    },
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

export const { resetSeniorities, modifySeniority, createSeniorities } = senioritiesSlice.actions;

export default senioritiesSlice.reducer;
