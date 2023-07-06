import {SortingDto} from "./SortingDto";
import {IsEnum, IsOptional} from "class-validator";
import {SortingType} from "./SortingType";
import {ValidationMessages} from "../../constant/ValidationMessages";

export class AdminSortingDto extends SortingDto {
  @IsEnum(SortingType,
      {message: ValidationMessages.DELETED_AT_MUST_BE_SORTING_TYPE})
  @IsOptional()
  deletedAt?: SortingType;
}