import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { authReducers, authRtkMiddlewares } from '../modules/auth/reducers';

const rootReducer = () => combineReducers({
  ...authReducers
});

export const moduleRtkMiddlewares = [
  ...authRtkMiddlewares
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
    immutableCheck: false,
    serializableCheck: false,
  }).concat(moduleRtkMiddlewares),
  enhancers: (getDefaultEnhancers)  => getDefaultEnhancers()
});

export const persistor = persistStore(store);