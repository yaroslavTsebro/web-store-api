import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {CategoryCharacteristic} from "./CategoryCharacteristic";
import {Photo} from "./Photo";
import {Product} from "./Product";

@Table
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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => Product)
  products: Product[];
}