export class GoogleOAuthConstants {
  public static readonly GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
  public static readonly GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
  public static readonly GOOGLE_PROFILE_URL = "https://www.googleapis.com/oauth2/v3/userinfo";
  public static readonly GOOGLE_REVOKE_TOKEN_URL = 'https://oauth2.googleapis.com/revoke';
  public static readonly CLIENT_ID = "client_id";
  public static readonly REDIRECT_URI = "redirect_uri";
  public static readonly RESPONSE_TYPE = "response_type";
  public static readonly RESPONSE_TYPE_VALUE = "code";
  public static readonly ACCESS_TOKEN = "access_token";
  public static readonly SCOPE = "code";
  public static readonly SCOPE_VAL = "openid%20profile%20email";
  public static readonly ACCESS_TYPE = "access_type";
}