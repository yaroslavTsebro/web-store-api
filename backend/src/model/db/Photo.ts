import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Product} from "./Product";

export class Photo extends Model {
  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId: number;

  @BelongsTo(() => Product, 'productId')
  product: Product;

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}