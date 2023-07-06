import {IsOptional, IsString, MaxLength, MinLength} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";
import {IdDto} from "../IdDto";

export class UpdateCountry extends IdDto{
  @IsString({message: ValidationMessages.ICON_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.ICON_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.ICON_IS_TOO_LONG + 50})
  @IsOptional()
  icon?: string;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.NAME_IS_TOO_LONG + 50})
  @IsOptional()
  name?: string;
}