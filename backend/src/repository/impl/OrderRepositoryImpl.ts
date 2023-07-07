import {OrderRepository} from "../OrderRepository";
import {CreateOrder} from "../../model/dto/order/CreateOrder";

import {UpdateType} from "../base/crud/URepository";
import {UpdateOrder} from "../../model/dto/order/UpdateOrder";
import {Order} from "../../model/db/Order";
import {SendingOrReceiving} from "../../model/db/SendingOrReceiving";
import {OrderState} from "../../model/db/OrderState";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {SortingOrder} from "../../model/dto/order/SortingOrder";
import {Order as OrderSequelize} from "sequelize";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class OrderRepositoryImpl implements OrderRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreateOrder): Promise<Order> {
    try {
      if (dto.sendingOrReceiving == SendingOrReceiving.SENDING) {
        return Order.create({
          startDate: new Date(),
          managerId: dto.managerId,
          customerId: dto.customerId,
          sendingOrReceiving: dto.sendingOrReceiving,
          condition: OrderState.CART,
          address: dto.address,
        })
      } else {
        return Order.create({
          startDate: new Date(),
          managerId: dto.managerId,
          providerId: dto.providerId,
          sendingOrReceiving: dto.sendingOrReceiving,
          condition: OrderState.CART,
          address: dto.address,
        })
      }
    } catch (e) {
      this.logger.error('Error occurred during create', dto);
      throw e;
    }
  }

  async createSending(dto: CreateOrder): Promise<Order> {
    try {
      this.logger.info('createSending started', dto);
      dto.sendingOrReceiving = SendingOrReceiving.SENDING;
      return this.create(dto);
    } catch (e) {
      this.logger.error('Error occurred during createSending', dto);
      throw e;
    }
  }

  async createReceiving(dto: CreateOrder): Promise<Order> {
    try {
      this.logger.info('createReceiving started', dto);
      dto.sendingOrReceiving = SendingOrReceiving.RECEIVING;
      return this.create(dto);
    } catch (e) {
      this.logger.error('Error occurred during createReceiving', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Order.destroy({
        where: {id: id}
      });
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findByPk(id: number): Promise<Order | null> {
    try {
      this.logger.info('findByPk started', id);
      return Order.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdateOrder): UpdateType<Order> {
    try {
      this.logger.info('update started', dto);
      const updateData: Partial<UpdateOrder> = {};

      if (dto.managerId) {
        updateData.managerId = dto.managerId;
      }

      if (dto.customerId) {
        updateData.customerId = dto.customerId;
      }

      if (dto.providerId) {
        updateData.providerId = dto.providerId;
      }

      if (dto.sendingOrReceiving) {
        updateData.sendingOrReceiving = dto.sendingOrReceiving;
      }

      if (dto.condition) {
        updateData.condition = dto.condition;
      }

      if (dto.address) {
        updateData.address = dto.address;
      }

      return Order.update(updateData, {
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

  async changeState(state: OrderState, id: number): Promise<[affectedCount: number]> {
    try {
      this.logger.info('changeState started', id, state);
      return Order.update({condition: state}, {where: {id: id}});
    } catch (e) {
      this.logger.error('Error occurred during changeState', id, state);
      throw e;
    }
  }

  async findAllPaginationAndSorting(
      dto: PaginationSearchValue,
      searchingDto: SortingOrder): PaginationType<Order> {
    try {
      this.logger.info('findAllPaginationAndSorting started',
          dto, searchingDto);
      let data = {};
      let sorting: OrderSequelize = [];

      if (dto.value) {
        data = {
          id: dto.value
        }
      }

      if (searchingDto.startDate) {
        sorting.push(['startDate', searchingDto.startDate.toString()]);
      }
      if (searchingDto.endDate) {
        sorting.push(['endDate', searchingDto.endDate.toString()]);
      }
      if (searchingDto.createdAt) {
        sorting.push(['createdAt', searchingDto.createdAt.toString()]);
      }
      if (searchingDto.updatedAt) {
        sorting.push(['updatedAt', searchingDto.updatedAt.toString()]);
      }

      return Order.findAndCountAll({
        limit: dto.pagination.limit,
        offset: dto.pagination.offset,
        where: data,
        order: sorting
      })
    } catch (e) {
      this.logger.error('Error occurred during findAllPaginationAndSorting',
          dto, searchingDto);
      throw e;
    }
  }
}