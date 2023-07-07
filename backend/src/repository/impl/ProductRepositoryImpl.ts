import {ProductRepository} from "../ProductRepository";
import {CreateProduct} from "../../model/dto/product/CreateProduct";
import {Product} from "../../model/db/Product";
import {UpdateProduct} from "../../model/dto/product/UpdateProduct";
import {Photo} from "../../model/db/Photo";
import {ProductCharacteristic} from "../../model/db/ProductCharacteristic";
import {Category} from "../../model/db/Category";
import {Company} from "../../model/db/Company";
import {CategoryCharacteristic} from "../../model/db/CategoryCharacteristic";
import {Characteristic} from "../../model/db/Characteristic";
import {Country} from "../../model/db/Country";
import {SortingProduct} from "../../model/dto/product/SortingProduct";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {UpdateType} from "../base/crud/URepository";
import {Op, Order} from "sequelize";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class ProductRepositoryImpl implements ProductRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateProduct): Promise<Product> {
    try {
      this.logger.info('creating started', dto);
      return Product.create({
        amount: dto.amount,
        price: dto.price,
        warranty: dto.warranty,
        weight: dto.weight,
        title: dto.title,
        description: dto.description,
        categoryId: dto.categoryId,
        companyId: dto.companyId,
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Product.destroy({
        where: {id: id}
      });
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findByPk(id: number): Promise<Product | null> {
    try {
      this.logger.info('findByPk started', id);
      return Product.findByPk(id, {
        include: [
          {model: Photo},
          {
            model: ProductCharacteristic,
            include: [
              {
                model: CategoryCharacteristic,
                include: [
                  {model: Characteristic}
                ]
              }
            ]
          },
          {model: Category},
          {
            model: Company,
            include: [
              {
                model: Country
              }
            ]
          },
        ]
      })
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateProduct): UpdateType<Product> {
    try {
      this.logger.info('update started', dto);
      const updateData: Partial<UpdateProduct> = {};

      if (dto.name) {
        updateData.name = dto.name;
      }
      if (dto.price) {
        updateData.price = dto.price;
      }
      if (dto.weight) {
        updateData.weight = dto.weight;
      }
      if (dto.amount) {
        updateData.amount = dto.amount;
      }
      if (dto.warranty) {
        updateData.warranty = dto.warranty;
      }
      if (dto.title) {
        updateData.title = dto.title;
      }
      if (dto.description) {
        updateData.description = dto.description;
      }
      if (dto.categoryId) {
        updateData.categoryId = dto.categoryId;
      }
      if (dto.companyId) {
        updateData.companyId = dto.companyId;
      }

      return Product.update(updateData, {
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

  async findAllPaginationAndSorting(
      dto: PaginationSearchValue,
      searchingDto: SortingProduct): PaginationType<Product> {
    try {
      this.logger.info('findAllPaginationAndSorting started', dto,
          searchingDto);
      let data = {};
      let sorting: Order = [];

      if (dto.value) {
        data = {
          name: {
            [Op.like]: `%${dto.value}%`,
          }
        }
      }

      if (searchingDto.name) {
        sorting.push(['name', searchingDto.name.toString()]);
      }
      if (searchingDto.price) {
        sorting.push(['price', searchingDto.price.toString()]);
      }
      if (searchingDto.price) {
        sorting.push(['price', searchingDto.price.toString()]);
      }
      if (searchingDto.weight) {
        sorting.push(['weight', searchingDto.weight.toString()]);
      }
      if (searchingDto.amount) {
        sorting.push(['amount', searchingDto.amount.toString()]);
      }
      if (searchingDto.warranty) {
        sorting.push(['warranty', searchingDto.warranty.toString()]);
      }
      if (searchingDto.createdAt) {
        sorting.push(['createdAt', searchingDto.createdAt.toString()]);
      }
      if (searchingDto.updatedAt) {
        sorting.push(['updatedAt', searchingDto.updatedAt.toString()]);
      }

      return Product.findAndCountAll({
        limit: dto.pagination.limit,
        offset: dto.pagination.offset,
        where: data,
        include: [
          {
            model: Photo,
            limit: 3
          }
        ],
        order: sorting
      })
    } catch (e) {
      this.logger.error('Error occurred during findAllPaginationAndSorting',
          dto, searchingDto);
      throw e;
    }
  }
}