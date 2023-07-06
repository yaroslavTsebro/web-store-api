import {IdDto} from "../IdDto";
import {IsOptional, IsString, MaxLength, MinLength} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class UpdateUser extends IdDto {
  @IsString({message: ValidationMessages.SURNAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.SURNAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.SURNAME_IS_TOO_LONG + 50})
  @IsOptional()
  surname?: string;

  @IsString({message: ValidationMessages.FIRSTNAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.FIRSTNAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.FIRSTNAME_IS_TOO_LONG + 50})
  @IsOptional()
  firstname?: string;

  @IsString({message: ValidationMessages.ADDRESS_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.ADDRESS_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.ADDRESS_IS_TOO_LONG + 50})
  @IsOptional()
  address?: string;
}