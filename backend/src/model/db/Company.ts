import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt, ForeignKey, HasMany,
  Model, Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Category} from "./Category";
import {Country} from "./Country";
import {Product} from "./Product";

@Table({
  paranoid: true,
})
export class Company extends Model {

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId: number;

  @BelongsTo(() => Country, 'countryId')
  country: Category;

  @HasMany( ()=> Product)
  products: Product[]

  @DeletedAt
  deletedAt: Date;
}