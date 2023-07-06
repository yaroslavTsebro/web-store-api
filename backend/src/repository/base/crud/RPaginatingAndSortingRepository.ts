import {PaginationSearchValue, PaginationType} from "./RPaginatingRepository";

export interface RPaginatingAndSortingRepository<R, S> {
  findAllPaginationAndSorting(
      dto: PaginationSearchValue, searchingDto: S): PaginationType<R>;

  findByPk(id: number): Promise<R | null>;
}