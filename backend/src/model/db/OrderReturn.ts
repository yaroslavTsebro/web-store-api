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
import {Order} from "./Order";

export class OrderReturn extends Model {

  @ForeignKey(() => Order)
  @Column(DataType.INTEGER)
  orderId!: number;

  @BelongsTo(() => Order, 'orderId')
  order!: Order;

  @Column(DataType.DATE)
  date: Date;

  @Unique
  @Column(DataType.TEXT)
  reason: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}