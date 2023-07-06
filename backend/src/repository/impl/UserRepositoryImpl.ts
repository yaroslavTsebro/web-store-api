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
import {injectable} from "inversify";

@injectable()
export class UserRepositoryImpl implements UserRepository {
  create(dto: CreateUser): Promise<User> {
    return User.create({
      surname: dto.surname,
      firstname: dto.firstname,
      email: dto.email,
      role: Role.CUSTOMER,
      password: dto.password,
      address: dto.address
    });
  }

  createUser(dto: CreateUser): Promise<User> {
    return User.create({
      surname: dto.surname,
      firstname: dto.firstname,
      email: dto.email,
      role: Role.CUSTOMER,
      password: dto.password,
      address: dto.address
    });
  }

  createAdmin(dto: CreateUser): Promise<User> {
    return User.create({
      surname: dto.surname,
      firstname: dto.firstname,
      email: dto.email,
      role: Role.ADMIN,
      password: dto.password,
      address: dto.address
    });
  }

  delete(id: number): Promise<number> {
    return User.destroy({
      where: {id: id}
    })
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<User> {
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
  }

  findByPk(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  update(dto: UpdateUser): UpdateType<User> {
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
  }

  makeAdmin(id: number): UpdateType<User> {
    return this.changeField(id, 'role', Role.ADMIN.toString());
  }

  changePassword(id: number, password: string): UpdateType<User> {
    return this.changeField(id, 'password', password);
  }

  changeEmail(id: number, email: string): UpdateType<User> {
    return this.changeField(id, 'email', email);
  }

  changeField(id: number, field: string, value: string): UpdateType<User> {
    return User.update({field: value}, {
      where: {
        id: id,
      },
      returning: true
    })
  }

}