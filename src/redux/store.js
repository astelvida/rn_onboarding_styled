import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER } from 'redux-persist';
import authReducer, {checkAuth} from './authSlice';
import profileReducer from './profileSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // enhancers: [devToolsEnhancer],
});

store.dispatch(checkAuth());

export default store;
