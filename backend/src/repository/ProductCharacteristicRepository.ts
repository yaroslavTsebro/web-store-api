import {CRUDRepository} from "./base/CRUDRepository";
import {ProductCharacteristic} from "../model/db/ProductCharacteristic";
import {
  CreateProductCharacteristic
} from "../model/dto/productCharacteristic/CreateProductCharacteristic";
import {
  UpdateProductCharacteristic
} from "../model/dto/productCharacteristic/UpdateProductCharacteristic";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";


export interface ProductCharacteristicRepository extends CUDRepository<ProductCharacteristic, CreateProductCharacteristic, UpdateProductCharacteristic>, RPaginatingRepository<ProductCharacteristic> {
  deleteByProductId(id: number): Promise<number>;
}