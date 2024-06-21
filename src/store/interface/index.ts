import { combineReducers } from 'redux';
import authReducer from '../auth/reducers';
import settingReducer from '../setting/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    setting: settingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
