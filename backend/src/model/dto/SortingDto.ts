import {SortingType} from "./SortingType";
import {IsEnum, IsOptional} from "class-validator";
import {ValidationMessages} from "../../constant/ValidationMessages";

export class SortingDto {
  @IsEnum(SortingType,
      {message: ValidationMessages.CREATED_AT_MUST_BE_SORTING_TYPE})
  @IsOptional()
  createdAt?: SortingType;

  @IsEnum(SortingType,
      {message: ValidationMessages.UPDATED_AT_MUST_BE_SORTING_TYPE})
  @IsOptional()
  updatedAt?: SortingType;
}