import {CRUDRepository} from "./base/CRUDRepository";
import {Photo} from "../model/db/Photo";
import {CreatePhoto} from "../model/dto/photo/CreatePhoto";
import {UpdatePhoto} from "../model/dto/photo/UpdatePhoto";
import {Optional} from "sequelize";

/**
 * Repository interface for managing photos.
 * @extends {CRUDRepository<Photo, CreatePhoto, UpdatePhoto>}
 */
export interface PhotoRepository extends CRUDRepository<Photo, CreatePhoto, UpdatePhoto> {
  /**
   * Bulk creates photos with optional product ID.
   * @param {Optional<CreatePhoto, 'productId'>[]} dto - An array of DTOs (Data Transfer Objects) for creating photos, with optional product ID.
   * @returns {Promise<Photo[]>} - A promise that resolves to an array of created photos.
   */
  bulkCreate(dto: Optional<CreatePhoto, 'productId'>[]): Promise<Photo[]>;

  /**
   * Finds photos by product ID.
   * @param {number} id - The product ID.
   * @returns {Promise<Photo[]>} - A promise that resolves to an array of found photos.
   */
  findByProductId(id: number): Promise<Photo[]>;

  /**
   * Deletes photos by product ID.
   * @param {number} id - The product ID.
   * @returns {Promise<number>} - A promise that resolves to the number of deleted photos.
   */
  deleteByProductId(id: number): Promise<number>;
}