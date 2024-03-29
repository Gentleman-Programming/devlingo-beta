import { bannerSlice } from '@/redux/states/banner';
import { userSlice } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    banner: bannerSlice.reducer,
  },
});
