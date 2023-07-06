import fs from 'fs';
import path from 'path';
import {Sequelize} from 'sequelize-typescript';
import {config} from "../../config/config";
import {Dialect} from "sequelize";

const basename = path.basename(__filename);

const fileNames = fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (file.indexOf('.') !== 0) &&
          (file !== basename) &&
          (file !== "AbstractEntity") &&
          (file.slice(-3) === '.ts');
    });

let sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      dialect: config.db.dialect as Dialect,
      host: config.db.host,
      logging: config.db.logging,
      models: fileNames,
    });

export default sequelize;
