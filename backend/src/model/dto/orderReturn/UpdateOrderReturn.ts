import {IdDto} from "../IdDto";
import {IsString, MaxLength, MinLength} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class UpdateOrderReturn extends IdDto {
  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(1024, {message: ValidationMessages.NAME_IS_TOO_LONG + 1024})
  reason: string;
}