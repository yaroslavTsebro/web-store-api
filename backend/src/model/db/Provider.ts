import {
  Column,
  CreatedAt,
  DataType, DeletedAt, HasMany,
  Model, Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Order} from "./Order";

@Table({
  paranoid: true,
})
export class Provider extends Model{
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  phoneNumber: string;

  @Column(DataType.TEXT)
  email: string;

  @HasMany(() => Order)
  orders: Order[];

  @DeletedAt
  deletedAt: Date;
}