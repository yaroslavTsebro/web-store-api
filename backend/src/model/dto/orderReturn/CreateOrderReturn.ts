import {IsPositive, IsString, MaxLength, MinLength} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateOrderReturn {
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  orderId: number;

  date: Date;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(1024, {message: ValidationMessages.NAME_IS_TOO_LONG + 1024})
  reason: string;
}