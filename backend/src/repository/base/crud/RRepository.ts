export interface RRepository<R> {
  findByPk(id: number): Promise<R | null>;

  findAll(): Promise<R[]>;
}