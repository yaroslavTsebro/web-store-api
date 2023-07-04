import {
  Association,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";
import db from "./index";
import {Category} from "./Category";

export class Characteristic extends Model<InferAttributes<Characteristic>, InferCreationAttributes<Characteristic>> {
  declare id: CreationOptional<number>;
  declare name: string;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Characteristic.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize: db.sequelize,
      tableName: 'characteristics',
      paranoid: true,
    });