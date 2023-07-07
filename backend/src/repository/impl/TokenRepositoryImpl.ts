import {TokenRepository} from "../TokenRepository";
import {CreateToken} from "../../model/dto/token/CreateToken";
import {Token} from "../../model/db/Token";
import {UpdateToken} from "../../model/dto/token/UpdateToken";
import {UpdateType} from "../base/crud/URepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class TokenRepositoryImpl implements TokenRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateToken): Promise<Token> {
    try {
      this.logger.info('creating started', dto);
      return Token.create({userId: dto.userId, token: dto.token});
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Token.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async update(dto: UpdateToken): UpdateType<Token> {
    try {
      this.logger.info('update started', dto);
      return Token.update(
          {token: dto.token},
          {
            where: {userId: dto.token},
            returning: true
          })
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }

  async findByToken(token: string): Promise<Token | null> {
    try {
      this.logger.info('findByToken started', token);
      return Token.findOne({where: {token: token}});
    } catch (e) {
      this.logger.error('Error occurred during findByToken', token);
      throw e;
    }
  }

  async findByUserId(id: number): Promise<Token | null> {
    try {
      this.logger.info('findByUserId started', id);
      return Token.findOne({where: {userId: id}});
    } catch (e) {
      this.logger.error('Error occurred during findByUserId', id);
      throw e;
    }
  }

}