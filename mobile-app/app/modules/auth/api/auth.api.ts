import { CONFIG } from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials:{ idToken: string | null }) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { 
  useLoginMutation, 
} = api;
