export type PaginationType<T> = Promise<{ rows: T[]; count: number }>;

/**
 * Data Transfer Object representing pagination settings.
 * @typedef {Object} PaginationDto
 * @property {number} offset - The offset value for pagination.
 * @property {number} limit - The limit value for pagination.
 */
export type PaginationDto = { offset: number, limit: number };

/**
 * Data Transfer Object representing pagination search criteria.
 * @typedef {Object} PaginationSearchValue
 * @property {string} [value] - The search value.
 * @property {PaginationDto} pagination - The pagination settings.
 */
export type PaginationSearchValue = {
  value?: string,
  pagination: PaginationDto
}

/**
 * Repository interface for paginating entities.
 * @template R - The type of the entity returned by the repository methods.
 */
export interface RPaginatingRepository<R> {

  /**
   * Finds entities using pagination.
   * @param {PaginationSearchValue} dto - The pagination search criteria.
   * @returns {PaginationType<R>} - The paginated result of entities.
   */
  findAllPagination(dto: PaginationSearchValue): PaginationType<R>;

  /**
   * Finds an entity by its primary key.
   * @param {number} id - The primary key of the entity to find.
   * @returns {Promise<R | null>} - A promise that resolves to the found entity or null if not found.
   */
  findByPk(id: number): Promise<R | null>;
}