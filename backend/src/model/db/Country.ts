import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Model,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Company} from "./Company";

export class Country extends Model {

  @Column(DataType.TEXT)
  icon: string;

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasMany(() => Company)
  companies: Company[]
}