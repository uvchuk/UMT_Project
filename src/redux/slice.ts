import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, User } from "../types/types";

const initialState: InitialState = { users: [], filter: "" };

const usersDataSlice = createSlice({
  name: "usersAPP",
  initialState,
  reducers: {
    syncUsers(state, action: PayloadAction<User[]>) {
      state.users.push(...action.payload);
    },
    filterUsers(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { syncUsers, filterUsers } = usersDataSlice.actions;
export const usersReducer = usersDataSlice.reducer;
