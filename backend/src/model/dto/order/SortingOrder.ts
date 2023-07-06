import {SortingDto} from "../SortingDto";
import {IsEnum, IsOptional} from "class-validator";
import {SortingType} from "../SortingType";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class SortingOrder extends SortingDto{
  @IsEnum(SortingType,
      {message: ValidationMessages.NAME_MUST_BE_SORTING_TYPE})
  @IsOptional()
  startDate?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.NAME_MUST_BE_SORTING_TYPE})
  @IsOptional()
  endDate?: SortingType;
}