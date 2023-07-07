import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model, Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Product} from "./Product";

@Table({
  paranoid: true,
})
export class Photo extends Model {
  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId: number;

  @BelongsTo(() => Product, 'productId')
  product: Product;

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @DeletedAt
  deletedAt: Date;
}