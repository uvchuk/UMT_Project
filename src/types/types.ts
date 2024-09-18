export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface InitialState {
  users: User[];
  filter: string;
}
