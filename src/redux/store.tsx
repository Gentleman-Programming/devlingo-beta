import { FirebaseUser, ISeniority } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice, senioritiesSlice } from './states';

export interface AppStore {
  user: FirebaseUser;
  seniorities: ISeniority;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    seniorities: senioritiesSlice.reducer,
  },
});
