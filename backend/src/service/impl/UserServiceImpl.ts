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
import {tokens} from "../oauth/OAuthService";

@injectable()
export class UserServiceImpl implements UserService {

  constructor(
      @inject(TYPES.UserRepository) private userRepository: UserRepository,
      @inject(
          TYPES.GoogleOAuthService) private googleOAuthService: GoogleOAuthService,
      @inject(TYPES.Logger) private logger: ILogger) {}

  getProfile(): Promise<User> {
    return Promise.resolve(undefined);
  }

  login(): Promise<User[]> {
    return Promise.resolve([]);
  }

  logout(): Promise<User[]> {
    return Promise.resolve([]);
  }

  refresh(): Promise<User> {
    return Promise.resolve(undefined);
  }

  registration(): Promise<User[]> {
    return Promise.resolve([]);
  }

  getGoogleAuthUrl(): string {
    return "";
  }

  async googleCallback(code: string): Promise<tokens> {
    try {
      const tokenResponse = await this.googleOAuthService.getTokenResponse(code)
      const {access_token, refresh_token, id_token} = tokenResponse;
      const profile: GoogleOAuthProfileResponse = await this.googleOAuthService
          .getProfile(access_token);
      return await this.userRepository.createFromGoogle(profile.email,
          profile.family_name, profile.given_name, profile.sub);
    } catch (e) {
      throw e;
    }
  }
}

