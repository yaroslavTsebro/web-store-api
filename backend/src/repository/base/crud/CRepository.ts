/**
 * Repository interface for creating entities.
 * @template C - The type of the DTO used for creating the entity.
 * @template R - The type of the result returned after creating the entity.
 */
export interface CRepository<C, R> {
  /**
   * Creates an entity using the provided DTO.
   * @param {C} dto - The DTO used for creating the entity.
   * @returns {Promise<R>} - A promise that resolves to the result of creating the entity.
   */
  create(dto: C): Promise<R>;
}