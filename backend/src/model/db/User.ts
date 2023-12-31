import {
  Column,
  DataType,
  DeletedAt,
  HasMany,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import {Order} from "./Order";
import {Role} from "./Role";
import {Token} from "./Token";
import {OAuthProvider} from "./OAuthProvider";
import {SendingOrReceiving} from "./SendingOrReceiving";

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

  @Column({
    type: DataType.ENUM(...Object.values(OAuthProvider)),
    defaultValue: null
  })
  oAuthProvider: OAuthProvider| null;

  @Column(DataType.TEXT)
  address: string;

  @Column(DataType.TEXT)
  password: string | null;

  @Column(DataType.TEXT)
  oAuthId: string| null;

  @HasMany(() => Order, 'managerId')
  ordersAsManager!: Order[];

  @HasMany(() => Order, 'customerId')
  ordersAsCustomer!: Order[];

  @HasOne(() => Token)
  token?: Token;

  @DeletedAt
  deletedAt: Date;
}