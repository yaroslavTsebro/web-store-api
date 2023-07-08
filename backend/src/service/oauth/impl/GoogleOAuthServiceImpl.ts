import {
  GoogleOAuthProfileResponse,
  GoogleOAuthService,
  GoogleOAuthTokenResponse
} from "../GoogleOAuthService";
import axios from "axios";
import {GoogleOAuthConstants} from "../../../constant/GoogleOAuthConstants";
import {config} from "../../../config/config";

export class GoogleOAuthServiceImpl implements GoogleOAuthService {
  async getTokenResponse(code: string): Promise<GoogleOAuthTokenResponse> {
    try {
      const tokenResponse = await axios.post(
          GoogleOAuthConstants.GOOGLE_TOKEN_URL, {
            code,
            client_id: config.oauth.google.clientId,
            client_secret: config.oauth.google.clientSecret,
            redirect_uri: config.oauth.redirectUrl,
            grant_type: 'authorization_code'
          });
      return tokenResponse.data;
    } catch (e) {
      throw e;
    }
  }

  async getProfile(accessToken: string): Promise<GoogleOAuthProfileResponse> {
    try {
      const profileResponse = await axios.get(
          `${GoogleOAuthConstants.GOOGLE_PROFILE_URL}?${GoogleOAuthConstants.ACCESS_TOKEN}=${accessToken}`);
      return profileResponse.data;
    } catch (e) {
      throw e;
    }
  }

}