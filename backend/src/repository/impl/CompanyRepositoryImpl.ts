import {CompanyRepository} from "../CompanyRepository";
import {CreateCompany} from "../../model/dto/company/CreateCompany";
import {Company} from "../../model/db/Company";
import {UpdateCompany} from "../../model/dto/company/UpdateCompany";
import {UpdateType} from "../base/crud/URepository";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {Op} from "sequelize";

export class CompanyRepositoryImpl implements CompanyRepository {
  create(dto: CreateCompany): Promise<Company> {
    return Company.create({
      name: dto.name,
      countryId: dto.countryId
    })
  }

  delete(id: number): Promise<number> {
    return Company.destroy({
      where: {id: id}
    })
  }

  findByPk(id: number): Promise<Company | null> {
    return Company.findByPk(id)
  }

  update(dto: UpdateCompany): UpdateType<Company> {
    const updateData: Partial<UpdateCompany> = {};

    if (dto.countryId) {
      updateData.countryId = dto.countryId;
    }

    if (dto.name) {
      updateData.name = dto.name;
    }
    return Company.update(updateData, {
      where: {
        id: dto.id,
      },
      returning: true
    })
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<Company> {
    let whereOptions = {};

    if (dto.value) {
      whereOptions = {
        name: {
          [Op.like]: `%${dto.value}%`,
        },
      }
    }
    return Company.findAndCountAll(
        {
          ...dto.pagination,
          where: whereOptions
        }
    )
  }

}