export type PaginationType<T> = Promise<{ rows: T[]; count: number }>;

export type PaginationDto = { offset: number, limit: number };
export type PaginationSearchValue = {
  value?: string,
  pagination: PaginationDto
}

export interface RPaginatingRepository<R> {
  findAllPagination(dto: PaginationSearchValue): PaginationType<R>;

  findByPk(id: number): Promise<R | null>;
}