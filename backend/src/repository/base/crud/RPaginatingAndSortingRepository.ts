import {PaginationSearchValue, PaginationType} from "./RPaginatingRepository";

/**
 * Repository interface for paginating and sorting entities.
 * @template R - The type of the entity returned by the repository methods.
 * @template S - The type of the DTO used for searching.
 */
export interface RPaginatingAndSortingRepository<R, S> {

  /**
   * Finds entities using pagination and sorting criteria.
   * @param {PaginationSearchValue} dto - The pagination and search criteria.
   * @param {S} searchingDto - The DTO used for searching.
   * @returns {PaginationType<R>} - The paginated result of entities.
   */
  findAllPaginationAndSorting(
      dto: PaginationSearchValue, searchingDto: S): PaginationType<R>;

  /**
   * Finds an entity by its primary key.
   * @param {number} id - The primary key of the entity to find.
   * @returns {Promise<R | null>} - A promise that resolves to the found entity or null if not found.
   */
  findByPk(id: number): Promise<R | null>;
}