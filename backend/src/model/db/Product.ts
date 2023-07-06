import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Unique
} from "sequelize-typescript";
import {Photo} from "./Photo";
import {Category} from "./Category";
import {Company} from "./Company";
import {OrderItem} from "./OrderItem";
import {ProductCharacteristic} from "./ProductCharacteristic";

export class Product extends Model {
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.INTEGER)
  price: number;

  @Column(DataType.INTEGER)
  weight: number;

  @Column(DataType.INTEGER)
  amount: number;

  @AllowNull
  @Column(DataType.INTEGER)
  warranty: number | null;

  @Column(DataType.TEXT)
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  categoryId: number;

  @BelongsTo(() => Category, 'categoryId')
  category: Category;

  @ForeignKey(() => Company)
  @Column(DataType.INTEGER)
  companyId: number;

  @BelongsTo(() => Company, 'companyId')
  company: Company;

  @HasMany(() => Photo)
  photos: Photo[];

  @HasMany(() => OrderItem)
  orderItems: OrderItem[];

  @HasMany(() => ProductCharacteristic)
  productCharacteristics: ProductCharacteristic[];
}