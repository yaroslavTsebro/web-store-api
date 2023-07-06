import {CountryRepository} from "../CountryRepository";
import {CreateCountry} from "../../model/dto/country/CreateCountry";
import {Country} from "../../model/db/Country";
import {UpdateCountry} from "../../model/dto/country/UpdateCountry";
import {UpdateType} from "../base/crud/URepository";

export class CountryRepositoryImpl implements CountryRepository {
  create(dto: CreateCountry): Promise<Country> {
    return Country.create({
      icon: dto.icon,
      name: dto.name
    })
  }

  delete(id: number): Promise<number> {
    return Country.destroy({
      where: {id: id}
    })
  }

  findAll(): Promise<Country[]> {
    return Country.findAll();
  }

  findByPk(id: number): Promise<Country | null> {
    return Country.findByPk(id);
  }

  update(dto: UpdateCountry): UpdateType<Country> {
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
  }

}