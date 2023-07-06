import {Category} from "../model/db/Category";
import {CreateCategory} from "../model/dto/category/CreateCategory";
import {UpdateCategory} from "../model/dto/category/UpdateCategory";
import {CUDRepository} from "./base/CUDRepository";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

export interface CategoryRepository extends CUDRepository<Category, CreateCategory, UpdateCategory>, RPaginatingRepository<Category> {

}