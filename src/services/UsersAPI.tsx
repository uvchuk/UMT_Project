import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

type ApiResponse = {
  data: User[];
  [key: string]: any;
};

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66e6b77c17055714e58a57a2.mockapi.io",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<ApiResponse, void>({
      query: () => `/users`,
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
