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

class CharacteristicRepositoryImpl implements CharacteristicRepository {
  create(dto: CreateCharacteristic): Promise<Characteristic> {
    return Characteristic.create({name: dto.name});
  }

  delete(id: number): Promise<number> {
    return Characteristic.destroy({
      where: {id: id}
    });
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<Characteristic> {
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
  }

  findByPk(id: number): Promise<Characteristic | null> {
    return Characteristic.findByPk(id);
  }

  update(dto: UpdateCharacteristic): UpdateType<Characteristic> {
    return Characteristic.update({name: dto.name}, {
      where: {
        id: dto.id,
      },
      returning: true
    })
  }
}