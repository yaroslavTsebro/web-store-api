import {CRepository} from "./crud/CRepository";
import {URepository} from "./crud/URepository";
import {DRepository} from "./crud/DRepository";

/**
 * Repository interface for creating, updating, and deleting entities.
 * @template R - The type of the entity returned by the repository methods.
 * @template C - The type of the DTO used for creating the entity.
 * @template U - The type of the DTO used for updating the entity.
 */
export interface CUDRepository<R, C, U> extends CRepository<C, R>, DRepository, URepository<U, R> {

}