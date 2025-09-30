import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState } from '../types/auth';

const initialState : AuthInitialState = {
  user: {
    name: null,
    email: null,
    id: null,
    mobile: null,
    photoUrl: null,
    role: null
  },
  token: {
    accessToken: null,
    refreshToken: null,
    sessionToken: null,
    expires: null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUserState: (state, action : {payload: {idToken?: string, user: any, refreshToken?: string, sessionToken?: string, expires?: string} }) => {
      state.user = action.payload.user;
      state.token = {
        accessToken: action.payload.idToken ?? null,
        refreshToken: action.payload.refreshToken ?? null,
        sessionToken: action.payload.sessionToken ?? null,
        expires: action.payload.expires ?? null
      };
      try {
        AsyncStorage.setItem("Vyybe-Auth-Token", action.payload.idToken ?? '');
      } catch (error) {
        console.error('Error setting access token:', error);
      }
    },
    logout: (state) => {
      state.user = {
        name: null,
        email: null,
        id: null,
        mobile: null,
        photoUrl: null,
        role: null
      };
      state.token = {
        accessToken: null,
        refreshToken: null,
        sessionToken: null,
        expires: null
      };
      try {
        AsyncStorage.removeItem("Vyybe-Auth-Token");
      } catch (error) {
        console.error('Error removing access token:', error);
      }
    },
  },
});

export const { logout, setUserState } = authSlice.actions;
export default authSlice.reducer;