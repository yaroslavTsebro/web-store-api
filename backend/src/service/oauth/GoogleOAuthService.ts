import {OAuthService} from "./OAuthService";

export type GoogleOAuthTokenResponse = {
  access_token: string,
  refresh_token: string,
  id_token: string
};

export type GoogleOAuthProfileResponse = {
  sub: string
  given_name: string,
  family_name: string
  email: string
};

export interface GoogleOAuthService extends OAuthService {
  getTokenResponse(code: string): Promise<GoogleOAuthTokenResponse>;

  getProfile(accessToken: string): Promise<GoogleOAuthProfileResponse>;
}