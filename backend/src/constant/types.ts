import {GoogleOAuthService} from "../service/oauth/GoogleOAuthService";
import {JwtUtils} from "../utils/JwtUtils";

export const TYPES = {
  UserService: Symbol('UserService'),
  GoogleOAuthService: Symbol('GoogleOAuthService'),
  Logger: Symbol('ILogger'),

  JwtUtils: Symbol('JwtUtils'),

  CategoryCharacteristicRepository: Symbol('CategoryCharacteristicRepository'),
  CategoryRepository: Symbol('CategoryRepository'),
  CharacteristicRepository: Symbol('CharacteristicRepository'),
  CompanyRepository: Symbol('CompanyRepository'),
  CountryRepository: Symbol('CountryRepository'),
  OrderItemRepository: Symbol('OrderItemRepository'),
  OrderRepository: Symbol('OrderRepository'),
  OrderReturnRepository: Symbol('OrderReturnRepository'),
  PhotoRepository: Symbol('PhotoRepository'),
  ProductCharacteristicRepository: Symbol('ProductCharacteristicRepository'),
  ProductRepository: Symbol('ProductRepository'),
  ProviderRepository: Symbol('ProviderRepository'),
  TokenRepository: Symbol('TokenRepository'),
  UserRepository: Symbol('UserRepository'),
}