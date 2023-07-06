export interface DRepository{
  delete(id: number): Promise<number>;
}