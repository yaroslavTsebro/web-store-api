import {Container} from "inversify";
import {UserRepository} from "../repository/UserRepository";
import {UserRepositoryImpl} from "../repository/impl/UserRepositoryImpl";
import {config} from "./config";
import {LoggerImpl} from "./impl/LoggerImpl";
import {UserService} from "../service/UserService";
import {UserServiceImpl} from "../service/impl/UserServiceImpl";
import {ILogger} from "./ILogger";
import {TYPES} from '../constant/types';
import {
  CategoryCharacteristicRepositoryImpl
} from "../repository/impl/CategoryCharacteristicRepositoryImpl";
import {
  CategoryRepositoryImpl
} from "../repository/impl/CategoryRepositoryImpl";
import {
  CharacteristicRepositoryImpl
} from "../repository/impl/CharacteristicRepositoryImpl";
import {CompanyRepositoryImpl} from "../repository/impl/CompanyRepositoryImpl";
import {CountryRepositoryImpl} from "../repository/impl/CountryRepositoryImpl";
import {
  OrderItemRepositoryImpl
} from "../repository/impl/OrderItemRepositoryImpl";
import {OrderRepositoryImpl} from "../repository/impl/OrderRepositoryImpl";
import {
  OrderReturnRepositoryImpl
} from "../repository/impl/OrderReturnRepositoryImpl";
import {PhotoRepositoryImpl} from "../repository/impl/PhotoRepositoryImpl";
import {
  ProductCharacteristicRepositoryImpl
} from "../repository/impl/ProductCharacteristicRepositoryImpl";
import {ProductRepositoryImpl} from "../repository/impl/ProductRepositoryImpl";
import {
  ProviderRepositoryImpl
} from "../repository/impl/ProviderRepositoryImpl";
import {TokenRepositoryImpl} from "../repository/impl/TokenRepositoryImpl";
import {JwtUtils} from "../utils/JwtUtils";
import {JwtUtilsImpl} from "../utils/impl/JwtUtilsImpl";

export class DIContainer {
  public diContainer: Container;

  constructor() {
    this.configure();
  }

  public configure() {
    this.diContainer = new Container();

    if (config.server.mock) {
      this.configureMockDependencies()
    } else {
      this.configureDependencies()
    }
  }

  private configureDependencies() {
    try {
      this.configureRepositories();
      this.configureUtils();
      this.configureServices();
    } catch (e) {
      console.log(e);
    }
  }

  private configureUtils() {
    this.diContainer
        .bind<ILogger>(TYPES.Logger)
        .to(LoggerImpl)
        .inSingletonScope();
    this.diContainer
        .bind<JwtUtils>(TYPES.JwtUtils)
        .to(JwtUtilsImpl)
        .inSingletonScope();
  }

  private configureServices() {
    this.diContainer
        .bind<UserService>(TYPES.UserService)
        .to(UserServiceImpl)
        .inSingletonScope();
  }

  private configureRepositories() {
    this.diContainer
        .bind<CategoryCharacteristicRepositoryImpl>(
            TYPES.CategoryCharacteristicRepository)
        .to(CategoryCharacteristicRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<UserRepository>(TYPES.UserRepository)
        .to(UserRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<CategoryRepositoryImpl>(TYPES.CategoryRepository)
        .to(CategoryRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<CharacteristicRepositoryImpl>(TYPES.CharacteristicRepository)
        .to(CharacteristicRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<CompanyRepositoryImpl>(TYPES.CompanyRepository)
        .to(CompanyRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<CountryRepositoryImpl>(TYPES.CountryRepository)
        .to(CountryRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<OrderItemRepositoryImpl>(TYPES.OrderItemRepository)
        .to(OrderItemRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<OrderRepositoryImpl>(TYPES.OrderRepository)
        .to(OrderRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<OrderReturnRepositoryImpl>(TYPES.OrderReturnRepository)
        .to(OrderReturnRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<PhotoRepositoryImpl>(TYPES.PhotoRepository)
        .to(PhotoRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<ProductCharacteristicRepositoryImpl>(
            TYPES.ProductCharacteristicRepository)
        .to(ProductCharacteristicRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<ProductRepositoryImpl>(TYPES.ProductRepository)
        .to(ProductRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<ProviderRepositoryImpl>(TYPES.ProviderRepository)
        .to(ProviderRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<TokenRepositoryImpl>(TYPES.TokenRepository)
        .to(TokenRepositoryImpl)
        .inSingletonScope();
    this.diContainer
        .bind<UserRepository>(TYPES.UserRepository)
        .to(UserRepositoryImpl)
        .inSingletonScope();
  }

  private configureMockDependencies() {
    this.configureMockUtils()
    this.configureMockServices()
    this.configureMockRepositories()
  }

  private configureMockUtils() {}

  private configureMockServices() {}

  private configureMockRepositories() {
    this.diContainer
        .bind<UserRepository>(TYPES.UserRepository)
        .to(UserRepositoryImpl)
        .inSingletonScope();
  }
}