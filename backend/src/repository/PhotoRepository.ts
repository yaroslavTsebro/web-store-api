import {CRUDRepository} from "./base/CRUDRepository";
import {Photo} from "../model/db/Photo";
import {CreatePhoto} from "../model/dto/photo/CreatePhoto";
import {UpdatePhoto} from "../model/dto/photo/UpdatePhoto";
import {Optional} from "sequelize";

export interface PhotoRepository extends CRUDRepository<Photo, CreatePhoto, UpdatePhoto> {
  bulkCreate(dto: Optional<CreatePhoto, 'productId'>[]): Promise<Photo[]>;

  findByProductId(id: number): Promise<Photo[]>;

  deleteByProductId(id: number):  Promise<number>;
}