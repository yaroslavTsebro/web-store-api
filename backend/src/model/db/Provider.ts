import {
  Column,
  CreatedAt,
  DataType, DeletedAt, HasMany,
  Model,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Order} from "./Order";

export class Provider extends Model{
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  phoneNumber: string;

  @Column(DataType.TEXT)
  email: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => Order)
  orders: Order[];
}