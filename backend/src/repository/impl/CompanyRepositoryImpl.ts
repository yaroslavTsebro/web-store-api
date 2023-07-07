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
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class CompanyRepositoryImpl implements CompanyRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateCompany): Promise<Company> {
    try {
      this.logger.info('creating started', dto);
      return Company.create({
        name: dto.name,
        countryId: dto.countryId
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Company.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findByPk(id: number): Promise<Company | null> {
    try {
      this.logger.info('findByPk started', id);
      return Company.findByPk(id)
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateCompany): UpdateType<Company> {
    try {
      this.logger.info('update started', dto);
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
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<Company> {
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
      return Company.findAndCountAll(
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