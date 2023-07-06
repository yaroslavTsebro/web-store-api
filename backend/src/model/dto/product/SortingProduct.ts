import {IsEnum, IsOptional} from "class-validator";
import {SortingType} from "../SortingType";
import {ValidationMessages} from "../../../constant/ValidationMessages";
import {SortingDto} from "../SortingDto";

export class SortingProduct extends SortingDto{
  @IsEnum(SortingType,
      {message: ValidationMessages.NAME_MUST_BE_SORTING_TYPE})
  @IsOptional()
  name?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.PRICE_MUST_BE_SORTING_TYPE})
  @IsOptional()
  price?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.WEIGHT_MUST_BE_SORTING_TYPE})
  @IsOptional()
  weight?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.AMOUNT_MUST_BE_SORTING_TYPE})
  @IsOptional()
  amount?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.WARRANTY_MUST_BE_SORTING_TYPE})
  @IsOptional()
  warranty?: SortingType;
}