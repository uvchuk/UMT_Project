import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/UsersAPI";
import { usersReducer } from "./slice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    usersAPP: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
