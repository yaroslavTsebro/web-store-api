import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  UpdatedAt
} from "sequelize-typescript";
import {CategoryCharacteristic} from "./CategoryCharacteristic";
import {Product} from "./Product";

export class ProductCharacteristic extends Model {
  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId: number;

  @BelongsTo(() => Product, 'productId')
  product: Product;

  @ForeignKey(() => CategoryCharacteristic)
  @Column(DataType.INTEGER)
  categoryCharacteristicId: number;

  @BelongsTo(() => CategoryCharacteristic, 'categoryCharacteristicId')
  categoryCharacteristic: CategoryCharacteristic;

  @Column(DataType.TEXT)
  value: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}