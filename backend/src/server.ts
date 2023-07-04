import 'reflect-metadata';
import {config} from "./config/config";
import {Application} from "express";
import {Server as HttpServer} from "http";

export class Server {
  private PORT: number = config.server.port;
  private readonly app: Application;
  private readonly httpServer: HttpServer;
}