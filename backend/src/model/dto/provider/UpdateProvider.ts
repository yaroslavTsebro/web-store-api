import {IdDto} from "../IdDto";
import {
  IsEmail,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class UpdateProvider extends IdDto {
  @IsString({message: ValidationMessages.USERNAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.USERNAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.USERNAME_IS_TOO_LONG + 50})
  @IsOptional()
  name?: string;

  @IsNumberString({},
      {message: ValidationMessages.PHONE_NUMBER_MUST_BE_NUMBER_STRING})
  @MinLength(2, {message: ValidationMessages.PHONE_NUMBER_IS_TOO_SHORT + 10})
  @MaxLength(50, {message: ValidationMessages.PHONE_NUMBER_IS_TOO_LONG + 12})
  @IsOptional()
  phoneNumber?: string;

  @IsString({message: ValidationMessages.EMAIL_MUST_BE_STRING})
  @IsEmail({}, {message: ValidationMessages.EMAIL_MUST_BE_EMAIL})
  @MinLength(3, {message: ValidationMessages.EMAIL_IS_TOO_SHORT + 3})
  @MaxLength(50, {message: ValidationMessages.EMAIL_IS_TOO_LONG + 50})
  @IsOptional()
  email?: string;
}