/**
 * Type representing the tokens.
 * @typedef {Object} Tokens
 * @property {string} refreshToken - The refresh token.
 * @property {string} accessToken - The access token.
 */
export type Tokens = {
  refreshToken: string,
  accessToken: string
}

/**
 * Interface for OAuth service.
 * @interface
 */
export interface OAuthService {

}
