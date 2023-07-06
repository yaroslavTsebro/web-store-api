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

class CategoryRepositoryImpl implements CategoryRepository {
  create(dto: CreateCategory): Promise<Category> {
    if (dto.categoryId) {
      return Category.create({name: dto.name, categoryId: dto.categoryId});
    } else {
      return Category.create({name: dto.name});
    }
  }

  delete(id: number): Promise<number> {
    return Category.destroy({
      where: {id: id}
    })
  }

  findByPk(id: number): Promise<Category | null> {
    return Category.findByPk(id);
  }

  update(dto: UpdateCategory): UpdateType<Category> {
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
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<Category> {
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
  }

}