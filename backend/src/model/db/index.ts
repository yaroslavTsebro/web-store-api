import {Sequelize} from 'sequelize-typescript';
import {config} from "../../config/config";
import {Dialect} from "sequelize";
import {Category} from "./Category";
import {Characteristic} from "./Characteristic";
import {CategoryCharacteristic} from "./CategoryCharacteristic";
import {ProductCharacteristic} from "./ProductCharacteristic";
import {Photo} from "./Photo";
import {Country} from "./Country";
import {Company} from "./Company";
import {User} from "./User";
import {Provider} from "./Provider";
import {Order} from "./Order";
import {OrderReturn} from "./OrderReturn";
import {OrderItem} from "./OrderItem";
import {Product} from "./Product";
import {Token} from "./Token";

let sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      dialect: config.db.dialect as Dialect,
      host: config.db.host,
      logging: config.db.logging,
      models: [
        Category,
        Characteristic,
        CategoryCharacteristic,
        ProductCharacteristic,
        Product,
        Photo,
        Country,
        Company,
        User,
        Provider,
        Order,
        OrderReturn,
        OrderItem,
        Token
      ],
    });

export default sequelize;
