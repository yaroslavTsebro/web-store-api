import {IsPositive} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateOrderItem {
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  orderId: number;
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  productId: number;
  upc: string[];
  amount: number;
  price: number;
}