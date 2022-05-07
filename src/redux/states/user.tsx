import { FirebaseUser } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState: FirebaseUser = {
  uid: '',
  email: '',
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info') as string) : UserEmptyState,
  reducers: {
    createUser: (_state, action) => {
      localStorage.setItem('user_info', JSON.stringify(action.payload));
      return action.payload;
    },
    modifyUser: (state, action) => {
      const editDataUser = { ...state, ...action.payload };
      localStorage.setItem('user_info', JSON.stringify(editDataUser));
      return editDataUser;
    },
    resetUser: () => {
      localStorage.setItem('user_info', JSON.stringify(UserEmptyState));
      return UserEmptyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
