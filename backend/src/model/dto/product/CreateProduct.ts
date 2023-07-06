import {CharacteristicForProduct} from "./CharacteristicForProduct";
import {
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateProduct {
  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(128, {message: ValidationMessages.NAME_IS_TOO_LONG + 128})
  name: string;

  @IsNumber({}, {message: ValidationMessages.PRICE_IS_NEGATIVE})
  price: number;

  @IsNumber({}, {message: ValidationMessages.WEIGHT_IS_NEGATIVE})
  weight: number;

  @IsNumber({}, {message: ValidationMessages.AMOUNT_IS_NEGATIVE})
  amount: number;

  @IsNumber({}, {message: ValidationMessages.WARRANTY_IS_NEGATIVE})
  warranty: number;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(128, {message: ValidationMessages.NAME_IS_TOO_LONG + 128})
  title: string;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(1024, {message: ValidationMessages.NAME_IS_TOO_LONG + 1024})
  description: string;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  categoryId: number;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  companyId: number;

  photos: string[];

  @ValidateNested({each: true})
  characteristics: CharacteristicForProduct[];
}