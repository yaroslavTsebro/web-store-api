import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model
} from "sequelize-typescript";
import {User} from "./User";

export class Token extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;
}