import {IdDto} from "../IdDto";
import {IsPositive} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class UpdateOrderItem extends IdDto {
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  productId: number;
  upc: string[];
  amount: number;
  price: number;
}