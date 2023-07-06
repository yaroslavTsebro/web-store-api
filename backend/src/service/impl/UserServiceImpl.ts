import {UserService} from "../UserService";
import {User} from "../../model/db/User";
import {inject, injectable} from "inversify";
import {UserRepository} from "../../repository/UserRepository";
import TYPES from "../../constant/types";

@injectable()
export class UserServiceImpl implements UserService {

  constructor(@inject(
      TYPES.UserRepository) private userRepository: UserRepository) {}

  async create(): Promise<User> {
    return this.userRepository.create({
      surname: 'greefe',
      firstname: 'frfre',
      password: 'fewfewfew',
      email: "rfefe",
      address: 'ffwe'
    });
  }

  async getAll(): Promise<User[]> {
    let user = await this.userRepository.findAllPagination(
        {pagination: {offset: 0, limit: 3}});
    return user.rows
  }

}