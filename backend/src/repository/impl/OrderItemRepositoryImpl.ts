import {OrderItemRepository} from "../OrderItemRepository";
import {CreateOrderItem} from "../../model/dto/orderItem/CreateOrderItem";
import {OrderItem} from "../../model/db/OrderItem";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {UpdateOrderItem} from "../../model/dto/orderItem/UpdateOrderItem";
import {UpdateType} from "../base/crud/URepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class OrderItemRepositoryImpl implements OrderItemRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateOrderItem): Promise<OrderItem> {
    try {
      this.logger.info('create started', dto);
      return OrderItem.create({
        orderId: dto.orderId,
        productId: dto.productId,
        upc: dto.upc,
        amount: dto.amount,
        price: dto.price,
      })
    } catch (e) {
      this.logger.error('Error occurred during create', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return OrderItem.destroy({where: {id: id}});
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findAllPagination(dto: PaginationSearchValue): PaginationType<OrderItem> {
    try {
      this.logger.info('findAllPagination started', dto);
      let whereOptions = {};

      if (dto.value) {
        whereOptions = {
          id: dto.value
        }
      }
      return OrderItem.findAndCountAll(
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

  async findByPk(id: number): Promise<OrderItem | null> {
    try {
      this.logger.info('findByPk started', id);
      return OrderItem.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateOrderItem): UpdateType<OrderItem> {
    try {
      this.logger.info('update started', dto);
      const updateData: Partial<OrderItem> = {};

      if (dto.productId) {
        updateData.productId = dto.productId;
      }

      if (dto.upc) {
        updateData.upc = dto.upc;
      }

      if (dto.amount) {
        updateData.amount = dto.amount;
      }

      if (dto.price) {
        updateData.price = dto.price;
      }

      return OrderItem.update(updateData, {
        where: {
          id: dto.id,
        },
        returning: true
      })
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }
}