import {CountryRepository} from "../CountryRepository";
import {CreateCountry} from "../../model/dto/country/CreateCountry";
import {Country} from "../../model/db/Country";
import {UpdateCountry} from "../../model/dto/country/UpdateCountry";
import {UpdateType} from "../base/crud/URepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class CountryRepositoryImpl implements CountryRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateCountry): Promise<Country> {
    try {
      this.logger.info('creating started', dto);
      return Country.create({
        icon: dto.icon,
        name: dto.name
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Country.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findAll(): Promise<Country[]> {
    try {
      this.logger.info('findAll started');
      return Country.findAll();
    } catch (e) {
      this.logger.error('Error occurred during findAll');
      throw e;
    }
  }

  async findByPk(id: number): Promise<Country | null> {
    try {
      this.logger.info('findByPk started', id);
      return Country.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateCountry): UpdateType<Country> {
    try {
      this.logger.info('update started', dto);
      const updateData: Partial<UpdateCountry> = {};

      if (dto.icon) {
        updateData.icon = dto.icon;
      }

      if (dto.name) {
        updateData.name = dto.name;
      }
      return Country.update(updateData, {
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