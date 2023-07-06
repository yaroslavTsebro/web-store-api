import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateUser {
  @IsString({message: ValidationMessages.SURNAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.SURNAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.SURNAME_IS_TOO_LONG + 50})
  surname: string;

  @IsString({message: ValidationMessages.FIRSTNAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.FIRSTNAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.FIRSTNAME_IS_TOO_LONG + 50})
  firstname: string;

  @IsString({message: ValidationMessages.EMAIL_MUST_BE_STRING})
  @IsEmail({}, {message: ValidationMessages.EMAIL_MUST_BE_EMAIL})
  @MinLength(3, {message: ValidationMessages.EMAIL_IS_TOO_SHORT + 3})
  @MaxLength(50, {message: ValidationMessages.EMAIL_IS_TOO_LONG + 50})
  email: string;

  @IsString({message: ValidationMessages.PASSWORD_MUST_BE_STRING})
  @MinLength(3, {message: ValidationMessages.PASSWORD_IS_TOO_SHORT + 3})
  @MaxLength(50, {message: ValidationMessages.PASSWORD_IS_TOO_LONG + 50})
  password: string;

  @IsString({message: ValidationMessages.ADDRESS_MUST_BE_STRING})
  @MinLength(3, {message: ValidationMessages.ADDRESS_IS_TOO_SHORT + 3})
  @MaxLength(50, {message: ValidationMessages.ADDRESS_IS_TOO_LONG + 50})
  address: string;
}