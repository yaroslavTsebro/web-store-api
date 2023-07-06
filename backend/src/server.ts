import 'reflect-metadata';
import {config} from "./config/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {errorHandlerMiddleware} from "./middleware/errorHandlerMiddleware";
import {DIContainer} from "./config/DIContainer";
import {InversifyExpressServer} from "inversify-express-utils";
import "./controller/UserController";

export class Server {
  private PORT: number = config.server.port;
  private readonly app: DIContainer;
  private readonly httpServer: InversifyExpressServer;

  constructor() {
    this.app = new DIContainer()
    this.httpServer = new InversifyExpressServer(this.app.diContainer);

    this.configureServer();
  }

  private configureServer() {
    this.httpServer.setConfig((app) => {
      const corsOptions = {
        origin: '*',
      };
      app.use(cors(corsOptions));
      app.use(cookieParser());
      app.use(express.json());
      app.use(errorHandlerMiddleware);
    })
  }

  public async start() {
    this.httpServer.build().listen(this.PORT, () => {
      const startUpMessage = `Server is working on ${this.PORT}`;
    });
  }
}