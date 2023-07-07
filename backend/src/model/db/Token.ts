import {
  BelongsTo,
  Column,
  DataType, DeletedAt,
  ForeignKey,
  Model, Table
} from "sequelize-typescript";
import {User} from "./User";

@Table({
  paranoid: true,
})
export class Token extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @DeletedAt
  deletedAt: Date;
}