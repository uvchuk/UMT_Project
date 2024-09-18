import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/types";

type ApiResponse = {
  data: User[];
  [key: string]: any;
};

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<ApiResponse, void>({
      query: () => `/users`,
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
