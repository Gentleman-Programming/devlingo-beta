import { Categories, FirebaseUser, Rol } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

import { persistDataLocalStorage, getDataLocalStorage } from '@/utilities';
import { localStorageEntities } from '@/models';

export const UserEmptyState: FirebaseUser = {
  uid: '',
  email: '',
  accessToken: '',
  seniorityGlobal: '',
  role: Rol.User,
  refreshToken: '',
  username: '',
  test: {
    name: Categories.General,
    progress: 1,
    pts: 0,
  },
  seniorities: {
    js: {
      pts: 0,
      txt: '',
    },
    css: {
      pts: 0,
      txt: '',
    },
    html: {
      pts: 0,
      txt: '',
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getDataLocalStorage<FirebaseUser>(localStorageEntities.user) || UserEmptyState,
  reducers: {
    createUser: (_state, action) => {
      persistDataLocalStorage<FirebaseUser>({
        data: action.payload,
        entity: localStorageEntities.user,
      });
      return action.payload;
    },
    modifyUser: (state, action) => {
      const editDataUser = { ...state, ...action.payload };
      persistDataLocalStorage<FirebaseUser>({
        data: editDataUser,
        entity: localStorageEntities.user,
      });
      return editDataUser;
    },
    resetUser: () => {
      persistDataLocalStorage<FirebaseUser>({
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
