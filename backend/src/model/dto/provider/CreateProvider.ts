import {
  IsEmail,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateProvider {
  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.NAME_IS_TOO_LONG + 50})
  name: string;

  @IsNumberString({},
      {message: ValidationMessages.PHONE_NUMBER_MUST_BE_NUMBER_STRING})
  @MinLength(2, {message: ValidationMessages.PHONE_NUMBER_IS_TOO_SHORT + 10})
  @MaxLength(50, {message: ValidationMessages.PHONE_NUMBER_IS_TOO_LONG + 12})
  phoneNumber: string;

  @IsString({message: ValidationMessages.EMAIL_MUST_BE_STRING})
  @IsEmail({}, {message: ValidationMessages.EMAIL_MUST_BE_EMAIL})
  @MinLength(3, {message: ValidationMessages.EMAIL_IS_TOO_SHORT + 3})
  @MaxLength(50, {message: ValidationMessages.EMAIL_IS_TOO_LONG + 50})
  email: string;
}