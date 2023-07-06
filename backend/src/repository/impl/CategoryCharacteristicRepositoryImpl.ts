import {
  CategoryCharacteristicRepository
} from "../CategoryCharacteristicRepository";
import {CategoryCharacteristic} from "../../model/db/CategoryCharacteristic";
import {
  CreateCategoryCharacteristic
} from "../../model/dto/categoryCharacteristic/CreateCategoryCharacteristic";
import {inject, injectable} from "inversify";
import {Logger} from "../../config/Logger";

@injectable()
export class CategoryCharacteristicRepositoryImpl implements CategoryCharacteristicRepository {

  constructor(@inject("Logger") private logger: Logger) {}
  create(dto: CreateCategoryCharacteristic): Promise<CategoryCharacteristic> {
    try {
      return CategoryCharacteristic.create({
        categoryId: dto.categoryId,
        characteristicId: dto.characteristicId
      })
    } catch (e) {
      this.logger.info('Error occurred during creating', dto);
      throw e;
    }
  }

}