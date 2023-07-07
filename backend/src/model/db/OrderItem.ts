import {
  BelongsTo,
  Column,
  DataType, DeletedAt,
  ForeignKey,
  Model, Table
} from "sequelize-typescript";
import {Order} from "./Order";
import {Product} from "./Product";

@Table({
  paranoid: true,
})
export class OrderItem extends Model {
  @ForeignKey(() => Order)
  @Column(DataType.INTEGER)
  orderId: number;

  @BelongsTo(() => Order, 'orderId')
  order: Order;

  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId: number;

  @BelongsTo(() => Product, 'productId')
  product: Product;

  @Column(DataType.ARRAY(DataType.STRING))
  upc: string[]; // unique product code

  @Column(DataType.INTEGER)
  amount: number;

  @Column(DataType.INTEGER)
  price: number;

  @DeletedAt
  deletedAt: Date;
}