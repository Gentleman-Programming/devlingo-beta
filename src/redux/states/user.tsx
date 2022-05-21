import { FirebaseUser } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

import { persistDataLocalStorage } from '@/utilities';
import { localStorageEntities } from '@/models';

export const UserEmptyState: FirebaseUser = {
  uid: '',
  email: '',
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem(localStorageEntities.user)
    ? JSON.parse(localStorage.getItem(localStorageEntities.user) as string)
    : UserEmptyState,
  reducers: {
    createUser: (_state, action) => {
      persistDataLocalStorage({
        data: action.payload,
        entity: localStorageEntities.user,
      });
      return action.payload;
    },
    modifyUser: (state, action) => {
      const editDataUser = { ...state, ...action.payload };
      persistDataLocalStorage({
        data: editDataUser,
        entity: localStorageEntities.user,
      });
      return editDataUser;
    },
    resetUser: () => {
      persistDataLocalStorage({
        data: UserEmptyState,
        entity: localStorageEntities.user,
      });
      return UserEmptyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
