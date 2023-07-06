import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt, ForeignKey, HasMany,
  Model,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Category} from "./Category";
import {Country} from "./Country";
import {Product} from "./Product";

export class Company extends Model {

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId: number;

  @BelongsTo(() => Country, 'countryId')
  country: Category;

  @HasMany( ()=> Product)
  products: Product[]
}