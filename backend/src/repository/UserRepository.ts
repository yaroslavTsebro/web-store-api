import {CUDRepository} from "./base/CUDRepository";
import {User} from "../model/db/User";
import {CreateUser} from "../model/dto/user/CreateUser";
import {UpdateUser} from "../model/dto/user/UpdateUser";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";
import {UpdateType} from "./base/crud/URepository";

/**
 * Repository interface for managing users.
 * @extends {CUDRepository<User, CreateUser, UpdateUser>}
 * @extends {RPaginatingRepository<User>}
 */
export interface UserRepository extends CUDRepository<User, CreateUser, UpdateUser>, RPaginatingRepository<User> {
  /**
   * Makes a user an admin.
   * @param {number} id - The ID of the user.
   * @returns {Promise<[number, User[]]>} - A promise that resolves to an array with the affected row count and the updated user.
   */
  makeAdmin(id: number): UpdateType<User>;

  /**
   * Changes the password of a user.
   * @param {number} id - The ID of the user.
   * @param {string} password - The new password.
   * @returns {Promise<[number, User[]]>} - A promise that resolves to an array with the affected row count and the updated user.
   */
  changePassword(id: number, password: string): UpdateType<User>;

  /**
   * Changes the email of a user.
   * @param {number} id - The ID of the user.
   * @param {string} email - The new email.
   * @returns {Promise<[number, User[]]>} - A promise that resolves to an array with the affected row count and the updated user.
   */
  changeEmail(id: number, email: string): UpdateType<User>;

  /**
   * Creates a new user from Google authentication.
   * @param {string} email - The email of the user.
   * @param {string} firstName - The first name of the user.
   * @param {string} lastName - The last name of the user.
   * @param {string} googleId - The Google ID of the user.
   * @returns {Promise<User>} - A promise that resolves to the created user.
   */
  createFromGoogle(
      email: string, firstName: string, lastName: string,
      googleId: string): Promise<User>;
}