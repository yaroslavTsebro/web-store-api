import {
  ProductCharacteristicRepository
} from "../ProductCharacteristicRepository";
import {
  CreateProductCharacteristic
} from "../../model/dto/productCharacteristic/CreateProductCharacteristic";
import {ProductCharacteristic} from "../../model/db/ProductCharacteristic";
import {
  UpdateProductCharacteristic
} from "../../model/dto/productCharacteristic/UpdateProductCharacteristic";
import {UpdateType} from "../base/crud/URepository";
import {Op} from "sequelize";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class ProductCharacteristicRepositoryImpl implements ProductCharacteristicRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateProductCharacteristic): Promise<ProductCharacteristic> {
    try {
      this.logger.info('creating started', dto);
      return ProductCharacteristic.create({
        categoryCharacteristicId: dto.categoryCharacteristicId,
        productId: dto.productId,
        value: dto.value
      });
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return ProductCharacteristic.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findByPk(id: number): Promise<ProductCharacteristic | null> {
    try {
      this.logger.info('findByPk started', id);
      return ProductCharacteristic.findByPk()
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateProductCharacteristic): UpdateType<ProductCharacteristic> {
    try {
      this.logger.info('update started', dto);
      return ProductCharacteristic.update({value: dto.value}, {
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

  async deleteByProductId(id: number): Promise<number> {
    try {
      this.logger.info('deleteByProductId started', id);
      return ProductCharacteristic.destroy({
        where: {
          productId: id
        }
      })
    } catch (e) {
      this.logger.error('Error occurred during deleteByProductId', id);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<ProductCharacteristic> {
    try {
      this.logger.info('findAllPagination started', dto);
      let whereOptions = {};

      if (dto.value) {
        whereOptions = {
          name: {
            [Op.like]: `%${dto.value}%`,
          },
        }
      }
      return ProductCharacteristic.findAndCountAll(
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
}