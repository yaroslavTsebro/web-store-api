import {
  Column,
  DataType, DeletedAt,
  HasMany,
  Model,
  Table,
  Unique
} from "sequelize-typescript";
import {CategoryCharacteristic} from "./CategoryCharacteristic";

@Table({
  paranoid: true,
})
export class Characteristic extends Model {
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @HasMany(() => CategoryCharacteristic)
  categoryCharacteristics!: CategoryCharacteristic[];

  @DeletedAt
  deletedAt: Date;
}