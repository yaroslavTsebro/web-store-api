/**
 * Repository interface for retrieving entities.
 * @template R - The type of the entity returned by the repository methods.
 */
export interface RRepository<R> {
  /**
   * Finds an entity by its primary key.
   * @param {number} id - The primary key of the entity to find.
   * @returns {Promise<R | null>} - A promise that resolves to the found entity or null if not found.
   */
  findByPk(id: number): Promise<R | null>;

  /**
   * Retrieves all entities.
   * @returns {Promise<R[]>} - A promise that resolves to an array of all entities.
   */
  findAll(): Promise<R[]>;
}