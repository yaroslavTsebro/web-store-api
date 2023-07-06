import {Order} from "../model/db/Order";
import {CreateOrder} from "../model/dto/order/CreateOrder";
import {UpdateOrder} from "../model/dto/order/UpdateOrder";
import {OrderState} from "../model/db/OrderState";
import {CUDRepository} from "./base/CUDRepository";
import {
  RPaginatingAndSortingRepository
} from "./base/crud/RPaginatingAndSortingRepository";
import {SortingOrder} from "../model/dto/order/SortingOrder";

export interface OrderRepository extends CUDRepository<Order, CreateOrder, UpdateOrder>, RPaginatingAndSortingRepository<Order, SortingOrder> {
  createReceiving(dto: CreateOrder): Promise<Order>;

  createSending(dto: CreateOrder): Promise<Order>;

  changeState(state: OrderState, id: number): Promise<[affectedCount: number]>;
}