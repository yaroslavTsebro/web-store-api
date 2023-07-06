import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt, HasMany,
  Model,
  Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {CategoryCharacteristic} from "./CategoryCharacteristic";

@Table
export class Characteristic extends Model {
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @HasMany(() => CategoryCharacteristic)
  categoryCharacteristics!: CategoryCharacteristic[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}