import {OrderReturnRepository} from "../OrderReturnRepository";
import {CreateOrderReturn} from "../../model/dto/orderReturn/CreateOrderReturn";
import {OrderReturn} from "../../model/db/OrderReturn";
import {UpdateOrderReturn} from "../../model/dto/orderReturn/UpdateOrderReturn";
import {UpdateType} from "../base/crud/URepository";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class OrderReturnRepositoryImpl implements OrderReturnRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateOrderReturn): Promise<OrderReturn> {
    try {
      this.logger.info('creating started', dto);
      return OrderReturn.create({
        orderId: dto.orderId,
        reason: dto.reason,
        date: new Date(),
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return OrderReturn.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async update(dto: UpdateOrderReturn): UpdateType<OrderReturn> {
    try {
      this.logger.info('update started', dto);
      return OrderReturn.update(
          {reason: dto.reason},
          {where: {id: dto.id}, returning: true})
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<OrderReturn> {
    try {
      this.logger.info('findAllPagination started', dto);
      let whereOptions = {};

      if (dto.value) {
        whereOptions = {
          id: dto.value
        }
      }
      return OrderReturn.findAndCountAll(
          {
            ...dto.pagination,
            where: whereOptions
          }
      )
    } catch (e) {
      this.logger.error('Error occurred during findAllPagination', dto);
      throw e;
    }
  }

  async findByPk(id: number): Promise<OrderReturn | null> {
    try {
      this.logger.info('findByPk started', id);
      return OrderReturn.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }
}