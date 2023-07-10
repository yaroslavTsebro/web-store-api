import {RRepository} from "./crud/RRepository";
import {CUDRepository} from "./CUDRepository";

/**
 * Repository interface for creating, reading, updating, and deleting entities.
 * @template R - The type of the entity returned by the repository methods.
 * @template C - The type of the DTO (Data Transfer Object) used for creating the entity.
 * @template U - The type of the DTO (Data Transfer Object) used for updating the entity.
 */
export interface CRUDRepository<R, C, U> extends CUDRepository<R, C, U>, RRepository<R> {
}