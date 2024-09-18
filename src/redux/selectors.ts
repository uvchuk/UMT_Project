import { RootState } from "./store";

export const selectUsers = (state: RootState) => state.usersAPP.users;
export const selectFilter = (state: RootState) => state.usersAPP.filter;
