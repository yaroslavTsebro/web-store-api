import {TokenRepository} from "../TokenRepository";
import {CreateToken} from "../../model/dto/token/CreateToken";
import {Token} from "../../model/db/Token";
import {UpdateToken} from "../../model/dto/token/UpdateToken";
import {UpdateType} from "../base/crud/URepository";

export class TokenRepositoryImpl implements TokenRepository {
  create(dto: CreateToken): Promise<Token> {
    return Token.create({userId: dto.userId, token: dto.token});
  }

  delete(id: number): Promise<number> {
    return Token.destroy({
      where: {id: id}
    })
  }

  update(dto: UpdateToken): UpdateType<Token> {
    return Token.update(
        {token: dto.token},
        {
          where: {userId: dto.token},
          returning: true
        })
  }

  findByToken(token: string): Promise<Token | null> {
    return Token.findOne({where: {token: token}});
  }

  findByUserId(id: number): Promise<Token | null> {
    return Token.findOne({where: {userId: id}});
  }

}