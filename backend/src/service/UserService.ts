import {User} from "../model/db/User";

export interface UserService {
  registration(): Promise<User[]>;

  login(): Promise<User[]>;

  logout(): Promise<User[]>;

  refresh(): Promise<User>;

  getProfile(): Promise<User>;

  getProfile(): Promise<User>;

  getGoogleAuthUrl(): string;

  googleCallback(code: string): void;
}