export interface CRepository<C, R>{
  create(dto: C): Promise<R>;
}