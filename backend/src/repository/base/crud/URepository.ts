export type UpdateType<T> = Promise<[affectedCount: number, affectedRows: T[]]>;

export interface URepository<U, R> {
  update(dto: U): UpdateType<R>;
}