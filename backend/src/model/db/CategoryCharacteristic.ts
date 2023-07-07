import {
  BelongsTo,
  Column,
  DataType, DeletedAt,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import {Category} from "./Category";
import {Characteristic} from "./Characteristic";

@Table({
  paranoid: true,
})
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

  @DeletedAt
  deletedAt: Date;
}