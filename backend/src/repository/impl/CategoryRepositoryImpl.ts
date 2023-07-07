import {CategoryRepository} from "../CategoryRepository";
import {CreateCategory} from "../../model/dto/category/CreateCategory";
import {Category} from "../../model/db/Category";
import {UpdateCategory} from "../../model/dto/category/UpdateCategory";
import {Op} from "sequelize";
import {UpdateType} from "../base/crud/URepository";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class CategoryRepositoryImpl implements CategoryRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateCategory): Promise<Category> {
    try {
      this.logger.info('Creating started', dto)
      if (dto.categoryId) {
        return Category.create({name: dto.name, categoryId: dto.categoryId});
      } else {
        return Category.create({name: dto.name});
      }
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('Deleting started')
      return Category.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during deleting', id);
      throw e;
    }
  }

  async findByPk(id: number): Promise<Category | null> {
    try {
      this.logger.info('findByPk started')
      return Category.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateCategory): UpdateType<Category> {
    try {
      this.logger.info('updating started', dto)
      const updateData: Partial<UpdateCategory> = {};

      if (dto.categoryId) {
        updateData.categoryId = dto.categoryId;
      }

      if (dto.name) {
        updateData.name = dto.name;
      }
      return Category.update(updateData, {
        where: {
          id: dto.id,
        },
        returning: true
      })
    } catch (e) {
      this.logger.error('Error occurred during updating', dto);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<Category> {
    try {
      this.logger.info('findAllPagination started', dto)
      let whereOptions = {};

      if (dto.value) {
        whereOptions = {
          name: {
            [Op.like]: `%${dto.value}%`,
          },
        }
      }
      return Category.findAndCountAll(
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