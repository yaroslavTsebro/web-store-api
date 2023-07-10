import {User} from "../model/db/User";
import {Tokens} from "./oauth/OAuthService";

/**
 * Service interface for user-related operations.
 * @interface
 */
export interface UserService {
  /**
   * Registers a new user.
   * @returns {Promise<User>} - A promise that resolves to the registered user.
   */
  registration(): Promise<User>;

  /**
   * Logs in a user.
   * @returns {Promise<User>} - A promise that resolves to the logged-in user.
   */
  login(): Promise<User>;

  /**
   * Logs out the current user.
   * @returns {Promise<User>} - A promise that resolves to the logged-out user.
   */
  logout(): Promise<User>;

  /**
   * Refreshes the access token using the provided refresh token.
   * @param {string} refreshToken - The refresh token.
   * @returns {Promise<Tokens>} - A promise that resolves to the new tokens.
   */
  refresh(refreshToken: string): Promise<Tokens>;

  /**
   * Retrieves the user profile by the user ID.
   * @param {number} id - The user ID.
   * @returns {Promise<User>} - A promise that resolves to the user profile.
   */
  getProfile(id: number): Promise<User>;

  /**
   * Generates the Google authentication URL for user login.
   * @returns {string} - The Google authentication URL.
   */
  getGoogleAuthUrl(): string;

  /**
   * Logs out the user from Google authentication.
   * @param {string} refreshToken - The refresh token for Google authentication.
   * @returns {Promise<void>} - A promise that resolves once the user is logged out from Google.
   */
  logoutGoogle(refreshToken: string): Promise<void>;

  /**
   * Handles the callback after Google authentication and returns the new tokens.
   * @param {string} code - The authorization code from the Google callback.
   * @returns {Promise<Tokens>} - A promise that resolves to the new tokens.
   */
  googleCallback(code: string): Promise<Tokens>;
}
