import {Role} from "./Role";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import db from "./index";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare surname: string;
  declare name: string;
  declare email: string;
  declare role: Role;
  declare password: string;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  surname: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(Role.ADMIN.toString(), Role.CUSTOMER.toString()),
    allowNull: false
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db.sequelize,
  tableName: 'users',
});

