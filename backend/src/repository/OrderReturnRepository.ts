import {CUDRepository} from "./base/CUDRepository";
import {OrderReturn} from "../model/db/OrderReturn";
import {UpdateOrderReturn} from "../model/dto/orderReturn/UpdateOrderReturn";
import {CreateOrderReturn} from "../model/dto/orderReturn/CreateOrderReturn";
import {RPaginatingRepository} from "./base/crud/RPaginatingRepository";

export interface OrderReturnRepository extends CUDRepository<OrderReturn, CreateOrderReturn, UpdateOrderReturn>, RPaginatingRepository<OrderReturn>{}
