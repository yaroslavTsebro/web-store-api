import {Container} from "inversify";
import {UserRepository} from "../repository/UserRepository";
import {UserRepositoryImpl} from "../repository/impl/UserRepositoryImpl";
import {config} from "./config";
import {LoggerImpl} from "./impl/LoggerImpl";
import {UserService} from "../service/UserService";
import {UserServiceImpl} from "../service/impl/UserServiceImpl";
import {ILogger} from "./ILogger";
import TYPES from '../constant/types';

export class DIContainer {
  public diContainer: Container;

  constructor() {
    this.configure();
  }

  public configure() {
    this.diContainer = new Container();

    if (config.server.mock) {
      this.configureRepositories()
    } else {
      this.configureMockRepositories()
    }
  }

  public configureRepositories() {
    this.diContainer
        .bind<UserRepository>(TYPES.UserRepository)
        .to(UserRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<ILogger>(TYPES.Logger)
        .to(LoggerImpl)
        .inSingletonScope();
    this.diContainer
        .bind<UserService>(TYPES.UserService)
        .to(UserServiceImpl)
        .inSingletonScope();
  }

  public configureMockRepositories() {
    this.diContainer
        .bind<UserRepository>(TYPES.UserRepository)
        .to(UserRepositoryImpl)
        .inSingletonScope();
  }
}