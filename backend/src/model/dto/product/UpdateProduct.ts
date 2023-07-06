import {
  IsNumber, IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength, ValidateNested
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";
import {CharacteristicForProduct} from "./CharacteristicForProduct";
import {IdDto} from "../IdDto";

export class UpdateProduct extends IdDto{
  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(128, {message: ValidationMessages.NAME_IS_TOO_LONG + 128})
  @IsOptional()
  name?: string;

  @IsNumber({}, {message: ValidationMessages.PRICE_IS_NEGATIVE})
  @IsOptional()
  price?: number;

  @IsNumber({}, {message: ValidationMessages.WEIGHT_IS_NEGATIVE})
  @IsOptional()
  weight?: number;

  @IsNumber({}, {message: ValidationMessages.AMOUNT_IS_NEGATIVE})
  @IsOptional()
  amount?: number;

  @IsNumber({}, {message: ValidationMessages.WARRANTY_IS_NEGATIVE})
  @IsOptional()
  warranty?: number;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(128, {message: ValidationMessages.NAME_IS_TOO_LONG + 128})
  @IsOptional()
  title?: string;

  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(1024, {message: ValidationMessages.NAME_IS_TOO_LONG + 1024})
  @IsOptional()
  description?: string;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  @IsOptional()
  categoryId?: number;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  @IsOptional()
  companyId?: number;

  @IsOptional()
  photos?: string[];

  @ValidateNested({each: true})
  @IsOptional()
  characteristics?: CharacteristicForProduct[];
}