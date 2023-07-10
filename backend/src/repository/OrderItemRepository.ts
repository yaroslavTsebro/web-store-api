import {CUDRepository} from "./base/CUDRepository";
import {CreateOrderItem} from "../model/dto/orderItem/CreateOrderItem";
import {UpdateOrderItem} from "../model/dto/orderItem/UpdateOrderItem";
import {OrderItem} from "../model/db/OrderItem";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

/**
 * Repository interface for managing order items.
 * @extends CUDRepository<OrderItem, CreateOrderItem, UpdateOrderItem>
 * @extends RPaginatingRepository<OrderItem>
 */
export interface OrderItemRepository extends CUDRepository<OrderItem, CreateOrderItem, UpdateOrderItem>, RPaginatingRepository<OrderItem>{

}