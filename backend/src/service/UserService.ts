import {User} from "../model/db/User";

export interface UserService {
  getAll(): Promise<User[]>;

  create(): Promise<User>;
}