import { createSlice } from "@reduxjs/toolkit";

const usersDataSlice = createSlice({
  name: "usersAPP",
  initialState: { users: [], filter: "" },
  reducers: {
    syncUsers(state, action) {
      state.users.push(...action.payload);
    },
    filterUsers(state, action) {
      state.filter = action.payload;
    },
  },
});

export const usersReducer = usersDataSlice.reducer;
export const { syncUsers, filterUsers } = usersDataSlice.actions;
export const selectUsers = (state) => state.usersAPP.users;
export const selectFilter = (state) => state.usersAPP.filter;
