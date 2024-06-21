import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './setting/reducers';
import authReducer from './auth/reducers';

const store = configureStore({
  reducer: {
    setting: settingReducer,
    auth: authReducer,
  },
});

export default store;
