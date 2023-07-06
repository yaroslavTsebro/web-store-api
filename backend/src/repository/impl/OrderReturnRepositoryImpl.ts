import {OrderReturnRepository} from "../OrderReturnRepository";
import {CreateOrderReturn} from "../../model/dto/orderReturn/CreateOrderReturn";
import {OrderReturn} from "../../model/db/OrderReturn";
import {UpdateOrderReturn} from "../../model/dto/orderReturn/UpdateOrderReturn";
import {UpdateType} from "../base/crud/URepository";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";

export class OrderReturnRepositoryImpl implements OrderReturnRepository {
  create(dto: CreateOrderReturn): Promise<OrderReturn> {
    return OrderReturn.create({
      orderId: dto.orderId,
      reason: dto.reason,
      date: new Date(),
    })
  }

  delete(id: number): Promise<number> {
    return OrderReturn.destroy({
      where: {id: id}
    })
  }

  update(dto: UpdateOrderReturn): UpdateType<OrderReturn> {
    return OrderReturn.update(
        {reason: dto.reason},
        {where: {id: dto.id}, returning: true})
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<OrderReturn> {
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
  }

  findByPk(id: number): Promise<OrderReturn | null> {
    return OrderReturn.findByPk(id);
  }

}