import {IsPositive} from "class-validator";
import {ValidationMessages} from "../../constant/ValidationMessages";

export class IdDto {
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  id: number;
}