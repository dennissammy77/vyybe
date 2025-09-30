import { api } from "../api/auth.api";
import authReducer from "./authSlice";

export const authReducers = {
  [api.reducerPath]: api.reducer,
  authReducer: authReducer,
};

export const authRtkMiddlewares = [
  api.middleware,
];