import {CharacteristicRepository} from "../CharacteristicRepository";
import {
  CreateCharacteristic
} from "../../model/dto/characteristic/CreateCharacteristic";
import {Characteristic} from "../../model/db/Characteristic";
import {
  UpdateCharacteristic
} from "../../model/dto/characteristic/UpdateCharacteristic";
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
export class CharacteristicRepositoryImpl implements CharacteristicRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateCharacteristic): Promise<Characteristic> {
    try {
      this.logger.info('creating started', dto);
      return Characteristic.create({name: dto.name});
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('deleting started', id);
      return Characteristic.destroy({
        where: {id: id}
      });
    } catch (e) {
      this.logger.error('Error occurred during deleting', id);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<Characteristic> {
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
      return Characteristic.findAndCountAll(
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

  async findByPk(id: number): Promise<Characteristic | null> {
    try {
      this.logger.info('findByPk started', id);
      return Characteristic.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateCharacteristic): UpdateType<Characteristic> {
    try {
      this.logger.info('update started', dto);
      return Characteristic.update({name: dto.name}, {
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