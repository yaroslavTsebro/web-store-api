import fs from 'fs';
import path from 'path';
import {DataTypes, Dialect, Sequelize} from 'sequelize';
import {config} from "../../config/config";

const basename = path.basename(__filename);
const db: Record<string, any> = {};

let sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      dialect: config.db.dialect as Dialect,
      host: config.db.host,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      logging: config.db.logging
    });

const files = fs.readdirSync(__dirname).filter((file: string) => {
  return (file.indexOf('.') !== 0) && (file !== basename) &&
      (file.slice(-3) === '.ts');
});

Promise.all(
    files.map(async (file: string) => {
      const {default: model} = await import(path.join(__dirname, file));
      db[model.name] = model(sequelize, DataTypes);
    })
)
    .then(() => {
      Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
          db[modelName].associate(db);
        }
      })
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
