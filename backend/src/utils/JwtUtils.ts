import {JwtPayload} from "jsonwebtoken";
import {Tokens} from "../service/oauth/OAuthService";

/**
 * Utility interface for JSON Web Tokens (JWT).
 */
export interface JwtUtils {
  /**
   * Generates JWT tokens based on the provided user ID and email.
   * @param {number} id - The user ID.
   * @param {string} email - The user email.
   * @returns {Tokens} - An object containing the generated access token and refresh token.
   */
  generateTokens(id: number, email: string): Tokens;

  /**
   * Validates a refresh token and returns its payload if valid.
   * @param {string} token - The refresh token to validate.
   * @returns {JwtPayload | string | null} - The payload of the refresh token if valid, otherwise a string indicating the error, or null if the token is invalid.
   */
  validateRefreshToken(token: string): JwtPayload | string | null;

  /**
   * Validates an access token and returns its payload if valid.
   * @param {string} token - The access token to validate.
   * @returns {JwtPayload | string | null} - The payload of the access token if valid, otherwise a string indicating the error, or null if the token is invalid.
   */
  validateAccessToken(token: string): JwtPayload | string | null;
}
