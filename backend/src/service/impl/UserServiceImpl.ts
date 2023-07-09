import {UserService} from "../UserService";
import {User} from "../../model/db/User";
import {inject, injectable} from "inversify";
import {UserRepository} from "../../repository/UserRepository";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";
import {
  GoogleOAuthProfileResponse,
  GoogleOAuthService
} from "../oauth/GoogleOAuthService";
import {Tokens} from "../oauth/OAuthService";
import {TokenRepository} from "../../repository/TokenRepository";
import {JwtUtils} from "../../utils/JwtUtils";
import {AppError} from "../../model/error/AppError";
import {ErrorCodes} from "../../constant/ErrorCodes";
import {ErrorMessages} from "../../constant/ErrorMessages";

@injectable()
export class UserServiceImpl implements UserService {

  constructor(
      @inject(TYPES.UserRepository) private userRepository: UserRepository,
      @inject(
          TYPES.GoogleOAuthService) private googleOAuthService: GoogleOAuthService,
      @inject(TYPES.JwtUtils) private jwtUtils: JwtUtils,
      @inject(TYPES.TokenRepository) private tokenRepository: TokenRepository,
      @inject(TYPES.Logger) private logger: ILogger) {}

  async getProfile(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findByPk(id);
      if (user) {
        return user;
      }
      throw new AppError(ErrorCodes.DONT_HAVE_SUCH_ACC,
          ErrorMessages.DONT_HAVE_SUCH_ACC);
    } catch (e) {
      throw e;
    }
  }

  login(): Promise<User[]> {
    return Promise.resolve([]);
  }

  logout(): Promise<User[]> {
    return Promise.resolve([]);
  }

  async logoutGoogle(refreshToken: string): Promise<void> {
    try {
      await this.googleOAuthService.revokeTokens(refreshToken);
    } catch (e) {
      throw e;
    }
  }

  async refresh(refreshToken: string): Promise<Tokens> {
    try {
      return await this.googleOAuthService.refreshTokens(refreshToken);
    } catch (e: any) {
      throw e;
    }
  }

  registration(): Promise<User[]> {
    return Promise.resolve([]);
  }

  getGoogleAuthUrl(): string {
    return "";
  }

  async googleCallback(code: string): Promise<Tokens> {
    try {
      const tokenResponse = await this.googleOAuthService.getTokenResponse(code)
      const {access_token, refresh_token, id_token} = tokenResponse;

      const profile: GoogleOAuthProfileResponse = await this.googleOAuthService
          .getProfile(access_token);
      const user = await this.userRepository.createFromGoogle(profile.email,
          profile.family_name, profile.given_name, profile.sub);

      return await this.googleOAuthService.refreshTokens(access_token);
    } catch (e) {
      throw e;
    }
  }
}

