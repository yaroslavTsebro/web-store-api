import {OAuthService, Tokens} from "./OAuthService";

/**
 * Response type for Google OAuth token.
 * @typedef {Object} GoogleOAuthTokenResponse
 * @property {string} access_token - The access token.
 * @property {string} refresh_token - The refresh token.
 * @property {string} id_token - The ID token.
 */
export type GoogleOAuthTokenResponse = {
  access_token: string,
  refresh_token: string,
  id_token: string
};

/**
 * Response type for Google OAuth profile.
 * @typedef {Object} GoogleOAuthProfileResponse
 * @property {string} sub - The subject (unique identifier) of the user.
 * @property {string} given_name - The given name (first name) of the user.
 * @property {string} family_name - The family name (last name) of the user.
 * @property {string} email - The email address of the user.
 */
export type GoogleOAuthProfileResponse = {
  sub: string
  given_name: string,
  family_name: string
  email: string
};

/**
 * Interface for Google OAuth service.
 * @interface
 * @extends {OAuthService}
 */
export interface GoogleOAuthService extends OAuthService {
  /**
   * Retrieves the token response for the given authorization code.
   * @param {string} code - The authorization code.
   * @returns {Promise<GoogleOAuthTokenResponse>} - A promise that resolves to the token response.
   */
  getTokenResponse(code: string): Promise<GoogleOAuthTokenResponse>;

  /**
   * Retrieves the user profile using the provided access token.
   * @param {string} accessToken - The access token.
   * @returns {Promise<GoogleOAuthProfileResponse>} - A promise that resolves to the user profile.
   */
  getProfile(accessToken: string): Promise<GoogleOAuthProfileResponse>;

  /**
   * Revokes the tokens associated with the provided access token.
   * @param {string} accessToken - The access token.
   * @returns {Promise<void>} - A promise that resolves once the tokens are revoked.
   */
  revokeTokens(accessToken: string): Promise<void>;

  /**
   * Refreshes the tokens using the provided refresh token.
   * @param {string} refreshToken - The refresh token.
   * @returns {Promise<Tokens>} - A promise that resolves to the new tokens.
   */
  refreshTokens(refreshToken: string): Promise<Tokens>;
}
