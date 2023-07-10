import {Token} from "../model/db/Token";
import {CreateToken} from "../model/dto/token/CreateToken";
import {CRepository} from "./base/crud/CRepository";
import {DRepository} from "./base/crud/DRepository";
import {URepository} from "./base/crud/URepository";
import {UpdateToken} from "../model/dto/token/UpdateToken";

/**
 * Repository interface for managing tokens.
 * @extends {CRepository<CreateToken, Token>}
 * @extends {DRepository}
 * @extends {URepository<UpdateToken, Token>}
 */
export interface TokenRepository extends CRepository<CreateToken, Token>, DRepository, URepository<UpdateToken, Token> {
  /**
   * Finds a token by user ID.
   * @param {number} id - The ID of the user.
   * @returns {Promise<Token | null>} - A promise that resolves to the found token, or null if not found.
   */
  findByUserId(id: number): Promise<Token | null>;

  /**
   * Finds a token by its token string.
   * @param {string} token - The token string.
   * @returns {Promise<Token | null>} - A promise that resolves to the found token, or null if not found.
   */
  findByToken(token: string): Promise<Token | null>;
}