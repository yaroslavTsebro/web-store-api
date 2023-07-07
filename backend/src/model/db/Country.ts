import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Model, Table,
  Unique,
  UpdatedAt
} from "sequelize-typescript";
import {Company} from "./Company";


@Table({
  paranoid: true,
})
export class Country extends Model {

  @Column(DataType.TEXT)
  icon: string;

  @Unique
  @Column(DataType.TEXT)
  name: string;

  @HasMany(() => Company)
  companies: Company[]

  @DeletedAt
  deletedAt: Date;
}