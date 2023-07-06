import {CRepository} from "./base/crud/CRepository";
import {
  CreateCategoryCharacteristic
} from "../model/dto/categoryCharacteristic/CreateCategoryCharacteristic";
import {CategoryCharacteristic} from "../model/db/CategoryCharacteristic";

export interface CategoryCharacteristicRepository extends CRepository<CreateCategoryCharacteristic, CategoryCharacteristic> {

}