import dotenv from 'dotenv';
import * as fs from "fs";
import {ConfigValues} from "../constant/ConfigValues";

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

export function getDbConfig() {
  return {
    dialect: process.env.DB_DIALECT || "postgres",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "zsbldqpk56",
    database: process.env.DB_NAME || "eshop",
    logging: Boolean(process.env.DB_LOGGING) || true,
  }
}

export const config = {
  server: {
    port: Number(process.env.PORT) || ConfigValues.DEFAULT_PORT,
    mock: process.env.MOCK ? Boolean(process.env.MOCK) : false,
  },
  logger: {
    level: process.env.LOGGER_LEVEL || 'info',
  },
  oauth: {
    google: {
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID || 'fakeId',
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET || "fakeSecret",
      accessType: process.env.OAUTH_GOOGLE_ACCESS_TYPE || "offline"
    },
    redirectUrl: process.env.REDIRECT_URI ||
        'http://127.0.0.1:3000/auth/google/callback'
  },
  db: getDbConfig(),
}
