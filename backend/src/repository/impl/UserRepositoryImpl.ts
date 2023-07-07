import {UserRepository} from "../UserRepository";
import {CreateUser} from "../../model/dto/user/CreateUser";
import {User} from "../../model/db/User";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {UpdateUser} from "../../model/dto/user/UpdateUser";
import {UpdateType} from "../base/crud/URepository";
import {Role} from "../../model/db/Role";
import {Op} from "sequelize";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class UserRepositoryImpl implements UserRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateUser): Promise<User> {
    try {
      this.logger.info('create started', dto);
      return User.create({
        surname: dto.surname,
        firstname: dto.firstname,
        email: dto.email,
        role: Role.CUSTOMER,
        password: dto.password,
        address: dto.address
      });
    } catch (e) {
      this.logger.error('Error occurred during create', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return User.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<User> {
    try {
      this.logger.info('findAllPagination started', dto);
      let whereOptions = {};

      if (dto.value) {
        whereOptions = {
          [Op.or]: [
            {
              surname: {
                [Op.like]: `%${dto.value}%`,
              },
            },
            {
              firstname: {
                [Op.like]: `%${dto.value}%`,
              },
            },
            {
              email: {
                [Op.like]: `%${dto.value}%`,
              },
            },
          ]
        }
      }
      return User.findAndCountAll(
          {
            ...dto.pagination,
            where: whereOptions
          }
      )
    } catch (e) {
      this.logger.error('Error occurred during findAllPagination', dto);
      throw e;
    }
  }

  async findByPk(id: number): Promise<User | null> {
    try {
      this.logger.info('findByPk started', id);
      return User.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateUser): UpdateType<User> {
    try {
      this.logger.info('update started', dto);
      const updateData: Partial<UpdateUser> = {};

      if (dto.surname) {
        updateData.surname = dto.surname;
      }

      if (dto.firstname) {
        updateData.firstname = dto.firstname;
      }

      if (dto.address) {
        updateData.address = dto.address;
      }

      return User.update(updateData, {
        where: {
          id: dto.id,
        },
        returning: true
      })
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }

  async makeAdmin(id: number): UpdateType<User> {
    try {
      this.logger.info('makeAdmin started', id);
      return this.changeField(id, 'role', Role.ADMIN.toString());
    } catch (e) {
      this.logger.error('Error occurred during makeAdmin', id);
      throw e;
    }
  }

  async changePassword(id: number, password: string): UpdateType<User> {
    try {
      this.logger.info('changePassword started', id, password);
      return this.changeField(id, 'password', password);
    } catch (e) {
      this.logger.error('Error occurred during changePassword', id, password);
      throw e;
    }
  }

  async changeEmail(id: number, email: string): UpdateType<User> {
    try {
      this.logger.info('changeEmail started', id, email);
      return this.changeField(id, 'email', email);
    } catch (e) {
      this.logger.error('Error occurred during changeEmail', id, email);
      throw e;
    }
  }

  async changeField(
      id: number, field: string, value: string): UpdateType<User> {
    try {
      this.logger.info('changeField started', id, field, value);
      return User.update({field: value}, {
        where: {
          id: id,
        },
        returning: true
      })
    } catch (e) {
      this.logger.error('Error occurred during changeField', id, field, value);
      throw e;
    }
  }

}