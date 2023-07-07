import {
  CategoryCharacteristicRepository
} from "../CategoryCharacteristicRepository";
import {CategoryCharacteristic} from "../../model/db/CategoryCharacteristic";
import {
  CreateCategoryCharacteristic
} from "../../model/dto/categoryCharacteristic/CreateCategoryCharacteristic";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class CategoryCharacteristicRepositoryImpl implements CategoryCharacteristicRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateCategoryCharacteristic): Promise<CategoryCharacteristic> {
    try {
      this.logger.info('creating started', dto);
      return CategoryCharacteristic.create({
        categoryId: dto.categoryId,
        characteristicId: dto.characteristicId
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }
}