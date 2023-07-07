import {
  Column,
  DataType, DeletedAt,
  HasMany,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import {Order} from "./Order";
import {Role} from "./Role";
import {OrderReturn} from "./OrderReturn";
import {Token} from "./Token";

@Table({
  paranoid: true,
})
export class User extends Model {

  @Column(DataType.TEXT)
  surname: string;

  @Column(DataType.TEXT)
  firstname: string;

  @Column(DataType.TEXT)
  email: string;

  @Column({
    type: DataType.ENUM(...Object.values(Role)),
    defaultValue: Role.CUSTOMER
  })
  role: Role;

  @Column(DataType.TEXT)
  password: string;

  @Column(DataType.TEXT)
  address: string;

  @HasMany(() => Order, 'managerId')
  ordersAsManager!: Order[];

  @HasMany(() => Order, 'customerId')
  ordersAsCustomer!: Order[];

  @HasOne( () => Token)
  token?: Token;

  @DeletedAt
  deletedAt: Date;
}