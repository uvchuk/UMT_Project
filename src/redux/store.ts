import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/UsersAPI";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          "meta.arg",
          "meta.baseQueryMeta.request",
          "meta.baseQueryMeta.response",
          "payload.headers",
          "payload.config",
          "payload.request",
        ],
      },
    }).concat(usersApi.middleware),
});
