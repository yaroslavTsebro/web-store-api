import {SendingOrReceiving} from "../../db/SendingOrReceiving";
import {
  IsEnum,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";
import {SortingType} from "../SortingType";

export class CreateOrder {
  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  managerId: number;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  @IsOptional()
  customerId?: number;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  @IsOptional()
  providerId?: number;

  @IsEnum(SortingType,
      {message: ValidationMessages.UPDATED_AT_MUST_BE_SORTING_TYPE})
  sendingOrReceiving: SendingOrReceiving;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(128, {message: ValidationMessages.NAME_IS_TOO_LONG + 128})
  address: string;
}