import {CUDRepository} from "./base/CUDRepository";
import {OrderReturn} from "../model/db/OrderReturn";
import {UpdateOrderReturn} from "../model/dto/orderReturn/UpdateOrderReturn";
import {CreateOrderReturn} from "../model/dto/orderReturn/CreateOrderReturn";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

/**
 * Repository interface for managing order returns.
 * @extends {CUDRepository<OrderReturn, CreateOrderReturn, UpdateOrderReturn>}
 * @extends {RPaginatingRepository<OrderReturn>}
 */
export interface OrderReturnRepository extends CUDRepository<OrderReturn, CreateOrderReturn, UpdateOrderReturn>, RPaginatingRepository<OrderReturn> {

}
