import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, InitialState, User } from "../types/types";

const initialState: InitialState = {
  users: [],
  filter: { name: "", username: "", email: "", phone: "" },
};

const usersDataSlice = createSlice({
  name: "usersAPP",
  initialState,
  reducers: {
    syncUsers(state, action: PayloadAction<User[]>) {
      state.users.push(...action.payload);
    },
    filterUsers(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
  },
});

export const { syncUsers, filterUsers } = usersDataSlice.actions;
export const usersReducer = usersDataSlice.reducer;
