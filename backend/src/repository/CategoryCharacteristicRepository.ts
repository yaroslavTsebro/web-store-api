import {CRepository} from "./base/crud/CRepository";
import {
  CreateCategoryCharacteristic
} from "../model/dto/categoryCharacteristic/CreateCategoryCharacteristic";
import {CategoryCharacteristic} from "../model/db/CategoryCharacteristic";

/**
 * Repository interface for managing category characteristics.
 * @interface
 * @extends {CRepository<CreateCategoryCharacteristic, CategoryCharacteristic>}
 */
export interface CategoryCharacteristicRepository extends CRepository<CreateCategoryCharacteristic, CategoryCharacteristic> {

}