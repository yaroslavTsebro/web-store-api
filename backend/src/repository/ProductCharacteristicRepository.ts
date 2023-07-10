import {ProductCharacteristic} from "../model/db/ProductCharacteristic";
import {
  CreateProductCharacteristic
} from "../model/dto/productCharacteristic/CreateProductCharacteristic";
import {
  UpdateProductCharacteristic
} from "../model/dto/productCharacteristic/UpdateProductCharacteristic";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

/**
 * Repository interface for managing product characteristics.
 * @extends {CUDRepository<ProductCharacteristic, CreateProductCharacteristic, UpdateProductCharacteristic>}
 * @extends {RPaginatingRepository<ProductCharacteristic>}
 */
export interface ProductCharacteristicRepository extends CUDRepository<ProductCharacteristic, CreateProductCharacteristic, UpdateProductCharacteristic>, RPaginatingRepository<ProductCharacteristic> {

  /**
   * Deletes product characteristics by product ID.
   * @param {number} id - The product ID.
   * @returns {Promise<number>} - A promise that resolves to the number of deleted product characteristics.
   */
  deleteByProductId(id: number): Promise<number>;
}