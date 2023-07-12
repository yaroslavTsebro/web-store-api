import {config} from "../../config/config";
import jwt, {JwtPayload} from 'jsonwebtoken'
import {Tokens} from "../../service/oauth/OAuthService";
import {JwtUtils} from "../JwtUtils";
import {injectable} from "inversify";

@injectable()
export class JwtUtilsImpl implements JwtUtils {
  public generateTokens(id: number, email: string): Tokens {
    const accessToken: string = jwt.sign(
        {id, email},
        config.jwt.accessSecret,
        {expiresIn: config.jwt.accessExpireDate});
    const refreshToken: string = jwt.sign(
        {id, email},
        config.jwt.refreshSecret,
        {expiresIn: config.jwt.refreshExpireDate});
    return {
      accessToken,
      refreshToken
    }
  }

  public validateAccessToken(token: string): JwtPayload | string | null {
    return this.validateToken(token, config.jwt.accessSecret);
  }

  public validateRefreshToken(token: string): JwtPayload | string | null {
    return this.validateToken(token, config.jwt.refreshSecret);
  }

  private validateToken(
      token: string, secret: string): JwtPayload | string | null {
    try {
      return jwt.verify(token, secret);
    } catch (e) {
      return null;
    }
  }
}