import {Order} from "../model/db/Order";
import {CreateOrder} from "../model/dto/order/CreateOrder";
import {UpdateOrder} from "../model/dto/order/UpdateOrder";
import {OrderState} from "../model/db/OrderState";
import {CUDRepository} from "./base/CUDRepository";
import {
  RPaginatingAndSortingRepository
} from "./base/crud/RPaginatingAndSortingRepository";
import {SortingOrder} from "../model/dto/order/SortingOrder";

/**
 * Repository interface for managing orders.
 * @extends {CUDRepository<Order, CreateOrder, UpdateOrder>}
 * @extends {RPaginatingAndSortingRepository<Order, SortingOrder>}
 */
export interface OrderRepository extends CUDRepository<Order, CreateOrder, UpdateOrder>, RPaginatingAndSortingRepository<Order, SortingOrder> {

  /**
   * Creates a new order for receiving.
   * @param {CreateOrder} dto - The DTO (Data Transfer Object) for creating the order.
   * @returns {Promise<Order>} - A promise that resolves to the created order.
   */
  createReceiving(dto: CreateOrder): Promise<Order>;

  /**
   * Creates a new order for sending.
   * @param {CreateOrder} dto - The DTO (Data Transfer Object) for creating the order.
   * @returns {Promise<Order>} - A promise that resolves to the created order.
   */
  createSending(dto: CreateOrder): Promise<Order>;

  /**
   * Changes the state of an order.
   * @param {OrderState} state - The new state of the order.
   * @param {number} id - The ID of the order to change the state.
   * @returns {Promise<[number]>} - A promise that resolves to an array with the affected row count.
   */
  changeState(state: OrderState, id: number): Promise<[affectedCount: number]>;
}