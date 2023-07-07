import {
  BelongsTo,
  Column,
  DataType, DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Unique
} from "sequelize-typescript";
import {CategoryCharacteristic} from "./CategoryCharacteristic";
import {Product} from "./Product";

@Table({
  paranoid: true,
})
export class Category extends Model {
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  parentId!: number;

  @BelongsTo(() => Category, 'parentId')
  parent!: Category;

  @HasMany(() => Category, 'parentId')
  children!: Category[];

  @HasMany(() => CategoryCharacteristic)
  categoryCharacteristics!: CategoryCharacteristic[];

  @HasMany(() => Product)
  products: Product[];

  @DeletedAt
  deletedAt: Date;
}