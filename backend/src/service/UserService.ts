import {User} from "../model/db/User";
import {Tokens} from "./oauth/OAuthService";

export interface UserService {
  registration(): Promise<User[]>;

  login(): Promise<User[]>;

  logout(): Promise<User[]>;

  refresh(refreshToken: string): Promise<Tokens>

  // getProfile(): Promise<User>;

  getProfile(id: number): Promise<User>

  getGoogleAuthUrl(): string;

  logoutGoogle(refreshToken: string): Promise<void>;

  googleCallback(code: string): Promise<Tokens>;
}