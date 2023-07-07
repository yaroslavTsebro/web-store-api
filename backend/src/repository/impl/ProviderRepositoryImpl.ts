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
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class ProviderRepositoryImpl implements ProviderRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateProvider): Promise<Provider> {
    try {
      this.logger.info('creating started', dto);
      return Provider.create({
        name: dto.name,
        email: dto.email,
        phoneNumber: dto.phoneNumber,
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Provider.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<Provider> {
    try {
      this.logger.info('findAllPagination started', dto);
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
    } catch (e) {
      this.logger.error('Error occurred during findAllPagination', dto);
      throw e;
    }
  }

  async findByPk(id: number): Promise<Provider | null> {
    try {
      this.logger.info('findByPk started', id);
      return Provider.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateProvider): UpdateType<Provider> {
    try {
      this.logger.info('update started', dto);
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
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }
}