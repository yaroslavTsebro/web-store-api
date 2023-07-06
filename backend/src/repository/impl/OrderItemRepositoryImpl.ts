import {OrderItemRepository} from "../OrderItemRepository";
import {CreateOrderItem} from "../../model/dto/orderItem/CreateOrderItem";
import {OrderItem} from "../../model/db/OrderItem";
import {
  PaginationSearchValue,
  PaginationType
} from "../base/crud/RPaginatingRepository";
import {UpdateOrderItem} from "../../model/dto/orderItem/UpdateOrderItem";
import {UpdateType} from "../base/crud/URepository";

export class OrderItemRepositoryImpl implements OrderItemRepository {
  create(dto: CreateOrderItem): Promise<OrderItem> {
    return OrderItem.create({
      orderId: dto.orderId,
      productId: dto.productId,
      upc: dto.upc,
      amount: dto.amount,
      price: dto.price,
    })
  }

  delete(id: number): Promise<number> {
    return OrderItem.destroy({where: {id: id}});
  }

  findAllPagination(dto: PaginationSearchValue): PaginationType<OrderItem> {
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
  }

  findByPk(id: number): Promise<OrderItem | null> {
    return OrderItem.findByPk(id);
  }

  update(dto: UpdateOrderItem): UpdateType<OrderItem> {
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
  }

}