import {Provider} from "../../model/db/Provider";
import {ProviderRepository} from "../ProviderRepository";
import {CreateProvider} from "../../model/dto/provider/CreateProvider";
import {UpdateProvider} from "../../model/dto/provider/UpdateProvider";
import {Op} from "sequelize";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {UpdateType} from "../base/crud/URepository";

class ProviderRepositoryImpl implements ProviderRepository {

  create(dto: CreateProvider): Promise<Provider> {
    return Provider.create({
      name: dto.name,
      email: dto.email,
      phoneNumber: dto.phoneNumber,
    })
  }

  delete(id: number): Promise<number> {
    return Provider.destroy({
      where: {id: id}
    })
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<Provider> {
    let whereOptions = {};

    if (dto.value) {
      whereOptions = {
        [Op.or]: [
          {
            email: {
              [Op.like]: `%${dto.value}%`,
            },
          },
          {
            name: {
              [Op.like]: `%${dto.value}%`,
            },
          },
          {
            phoneNumber: {
              [Op.like]: `%${dto.value}%`,
            },
          },
        ]
      }
    }
    return Provider.findAndCountAll(
        {
          ...dto.pagination,
          where: whereOptions
        }
    )
  }

  findByPk(id: number): Promise<Provider | null> {
    return Provider.findByPk(id);
  }

  update(dto: UpdateProvider): UpdateType<Provider> {
    const updateData: Partial<UpdateProvider> = {};

    if (dto.name) {
      updateData.name = dto.name;
    }

    if (dto.phoneNumber) {
      updateData.phoneNumber = dto.phoneNumber;
    }

    if (dto.email) {
      updateData.email = dto.email;
    }

    return Provider.update(updateData, {
      where: {
        id: dto.id,
      },
      returning: true
    })
  }
}