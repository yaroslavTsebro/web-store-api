import {Token} from "../model/db/Token";
import {CreateToken} from "../model/dto/token/CreateToken";
import {CRepository} from "./base/crud/CRepository";
import {DRepository} from "./base/crud/DRepository";
import {URepository} from "./base/crud/URepository";
import {UpdateToken} from "../model/dto/token/UpdateToken";

export interface TokenRepository extends CRepository<CreateToken, Token>, DRepository, URepository<UpdateToken, Token> {
  findByUserId(id: number): Promise<Token | null>;

  findByToken(token: string): Promise<Token | null>;

}