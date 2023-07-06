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

export class OrderRepositoryImpl implements OrderRepository {
  create(dto: CreateOrder): Promise<Order> {
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

  }

  createSending(dto: CreateOrder): Promise<Order> {
    dto.sendingOrReceiving = SendingOrReceiving.SENDING;
    return this.create(dto);
  }

  createReceiving(dto: CreateOrder): Promise<Order> {
    dto.sendingOrReceiving = SendingOrReceiving.RECEIVING;
    return this.create(dto);
  }

  delete(id: number): Promise<number> {
    return Order.destroy({
      where: {id: id}
    });
  }

  findByPk(id: number): Promise<Order | null> {
    return Order.findByPk(id);
  }

  update(dto: UpdateOrder): UpdateType<Order> {
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
  }

  changeState(state: OrderState, id: number): Promise<[affectedCount: number]> {
    return Order.update({condition: state}, {where: {id: id}});
  }

  findAllPaginationAndSorting(
      dto: PaginationSearchValue,
      searchingDto: SortingOrder): PaginationType<Order> {
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
  }

}