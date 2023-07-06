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
import {Category} from "../../model/db/Category";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";

export class ProductCharacteristicRepositoryImpl implements ProductCharacteristicRepository {
  create(dto: CreateProductCharacteristic): Promise<ProductCharacteristic> {
    return ProductCharacteristic.create({
      categoryCharacteristicId: dto.categoryCharacteristicId,
      productId: dto.productId,
      value: dto.value
    });
  }

  delete(id: number): Promise<number> {
    return ProductCharacteristic.destroy({
      where: {id: id}
    })
  }


  findByPk(id: number): Promise<ProductCharacteristic | null> {
    return ProductCharacteristic.findByPk()
  }

  update(dto: UpdateProductCharacteristic): UpdateType<ProductCharacteristic> {
    return ProductCharacteristic.update({value: dto.value}, {
      where: {
        id: dto.id,
      },
      returning: true
    })
  }

  deleteByProductId(id: number): Promise<number> {
    return ProductCharacteristic.destroy({
      where: {
        productId: id
      }
    })
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<ProductCharacteristic> {
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
  }
}