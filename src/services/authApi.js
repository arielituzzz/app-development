import { apiKey, authUrl } from "../firebase";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (...auth) => ({
        url: `accounts:signUp?Key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});
