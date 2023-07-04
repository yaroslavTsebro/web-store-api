import dotenv from 'dotenv';
import * as fs from "fs";
import {ConfigValues} from "../constant/configValues";

fs.access(
    ConfigValues.CONFIG_PATH +
    ConfigValues.ENV_EXTENSION +
    process.env.NODE_ENV, (err) => {
      dotenv.config(
          {path: ConfigValues.CONFIG_PATH + ConfigValues.DEVELOPMENT_EVN})
    })
dotenv.config({
  path:
      ConfigValues.CONFIG_PATH +
      ConfigValues.ENV_EXTENSION +
      process.env.NODE_ENV
});

export function getDbConfig(){
  return  {
    dialect: process.env.DB_DIALECT || "postgres",
        host: process.env.DB_HOST || "localhost",
        username: process.env.DB_USERNAME || "username",
        password: process.env.DB_PASSWORD || "password",
        database: process.env.DB_NAME || "name",
        logging: Boolean(process.env.DB_LOGGING) || true,
  }
}

export const config = {
  server: {
    port: Number(process.env.PORT) || ConfigValues.DEFAULT_PORT,
  },
  db: getDbConfig(),
}
