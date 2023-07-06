import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt
} from "sequelize-typescript";
import {Category} from "./Category";
import {Characteristic} from "./Characteristic";

@Table
export class CategoryCharacteristic extends Model {
  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  categoryId: number;

  @ForeignKey(() => Characteristic)
  @Column(DataType.INTEGER)
  characteristicId: number;

  @BelongsTo(() => Category, 'categoryId')
  category: Category;

  @BelongsTo(() => Characteristic, 'characteristicId')
  characteristic: Characteristic;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}