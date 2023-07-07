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
import {Order} from "./Order";

@Table({
  paranoid: true,
})
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

  @DeletedAt
  deletedAt: Date;
}