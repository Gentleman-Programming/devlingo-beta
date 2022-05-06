import { FirebaseUser } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState: FirebaseUser = {
  uid: '',
  email: '',
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (_state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => UserEmptyState,
  },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
