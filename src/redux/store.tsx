import { FirebaseUser } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';

export interface AppStore {
  user: FirebaseUser;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});
