import {JwtPayload} from "jsonwebtoken";
import {Tokens} from "../service/oauth/OAuthService";

export interface JwtUtils {
  generateTokens(id: number, email: string): Tokens;

  validateRefreshToken(token: string): JwtPayload | string | null;

  validateAccessToken(token: string): JwtPayload | string | null
}