/**
 * Repository interface for deleting entities.
 */
export interface DRepository {
  /**
   * Deletes an entity based on the provided ID.
   * @param {number} id - The ID of the entity to delete.
   * @returns {Promise<number>} A promise that resolves to the number of affected rows or entities.
   */
  delete(id: number): Promise<number>;
}