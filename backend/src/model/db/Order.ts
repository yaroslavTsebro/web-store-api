import {
  AllowNull,
  BelongsTo,
  Column,
  DataType, DeletedAt,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table
} from "sequelize-typescript";
import {OrderItem} from "./OrderItem";
import {User} from "./User";
import {Provider} from "./Provider";
import {OrderReturn} from "./OrderReturn";
import {SendingOrReceiving} from "./SendingOrReceiving";
import {OrderState} from "./OrderState";

@Table({
  paranoid: true,
})
export class Order extends Model {
  @Column(DataType.TEXT)
  startDate: Date;

  @AllowNull
  @Column(DataType.TEXT)
  endDate!: Date | null;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  managerId: number;

  @BelongsTo(() => User, 'managerId')
  manager: User;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER, allowNull: true})
  customerId: number | null;

  @BelongsTo(() => User, 'customerId')
  customer: User | null;

  @ForeignKey(() => Provider)
  @Column({type: DataType.INTEGER, allowNull: true})
  providerId: number | null;

  @BelongsTo(() => Provider, 'providerId')
  provider: Provider | null;

  @Column({
    type: DataType.ENUM(...Object.values(SendingOrReceiving)),
    defaultValue: SendingOrReceiving.SENDING
  })
  sendingOrReceiving: SendingOrReceiving;

  @Column({
    type: DataType.ENUM(...Object.values(OrderState)),
    defaultValue: OrderState.CART
  })
  condition: OrderState;

  @Column(DataType.TEXT)
  address: string;

  @HasMany(() => OrderItem)
  orderItems: OrderItem[];

  @HasOne(() => OrderReturn)
  orderReturn?: OrderReturn;

  @DeletedAt
  deletedAt: Date;
}