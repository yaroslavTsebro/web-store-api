import {CUDRepository} from "./base/CUDRepository";
import {User} from "../model/db/User";
import {CreateUser} from "../model/dto/user/CreateUser";
import {UpdateUser} from "../model/dto/user/UpdateUser";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";
import {UpdateType} from "./base/crud/URepository";

export interface UserRepository extends CUDRepository<User, CreateUser, UpdateUser>, RPaginatingRepository<User> {
  makeAdmin(id: number): UpdateType<User>;

  changePassword(id: number, password: string): UpdateType<User>;

  changeEmail(id: number, email: string): UpdateType<User>;

  createFromGoogle(email: string, firstName: string, lastName: string, googleId: string): Promise<User>;
}