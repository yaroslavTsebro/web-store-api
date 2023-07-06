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

class ProductRepositoryImpl implements ProductRepository {
  create(dto: CreateProduct): Promise<Product> {
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
  }

  delete(id: number): Promise<number> {
    return Product.destroy({
      where: {id: id}
    });
  }

  findByPk(id: number): Promise<Product | null> {
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
  }

  update(dto: UpdateProduct): UpdateType<Product> {
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
  }

  findAllPaginationAndSorting(
      dto: PaginationSearchValue,
      searchingDto: SortingProduct): PaginationType<Product> {
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
  }

}