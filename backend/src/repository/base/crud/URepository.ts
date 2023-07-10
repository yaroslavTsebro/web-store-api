/**
 * Type representing the result of an update operation.
 * @template T - The type of the affected rows.
 */
export type UpdateType<T> = Promise<[affectedCount: number, affectedRows: T[]]>;

/**
 * Repository interface for updating entities.
 * @template U - The type of the DTO (Data Transfer Object) used for updating the entity.
 * @template R - The type of the result returned after updating the entity.
 */
export interface URepository<U, R> {
  /**
   * Updates an entity using the provided DTO.
   * @param {U} dto - The DTO (Data Transfer Object) used for updating the entity.
   * @returns {UpdateType<R>} - A promise that resolves to the result of the update operation.
   */
  update(dto: U): UpdateType<R>;
}