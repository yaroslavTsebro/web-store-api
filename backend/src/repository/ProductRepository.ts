import {Product} from "../model/db/Product";
import {CreateProduct} from "../model/dto/product/CreateProduct";
import {UpdateProduct} from "../model/dto/product/UpdateProduct";
import {SortingProduct} from "../model/dto/product/SortingProduct";
import {CUDRepository} from "./base/CUDRepository";
import {
  RPaginatingAndSortingRepository
} from "./base/crud/RPaginatingAndSortingRepository";

/**
 * Repository interface for managing products.
 * @extends {CUDRepository<Product, CreateProduct, UpdateProduct>}
 * @extends {RPaginatingAndSortingRepository<Product, SortingProduct>}
 */
export interface ProductRepository extends CUDRepository<Product, CreateProduct, UpdateProduct>,
    RPaginatingAndSortingRepository<Product, SortingProduct> {
}