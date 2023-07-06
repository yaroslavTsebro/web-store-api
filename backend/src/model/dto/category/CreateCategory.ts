import {
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";
import {ValidationMessages} from "../../../constant/ValidationMessages";

export class CreateCategory {
  @IsString({message: ValidationMessages.NAME_MUST_BE_STRING})
  @MinLength(2, {message: ValidationMessages.NAME_IS_TOO_SHORT + 2})
  @MaxLength(50, {message: ValidationMessages.NAME_IS_TOO_LONG + 50})
  name: string;

  @IsPositive({message: ValidationMessages.ID_IS_NEGATIVE})
  @IsOptional()
  categoryId?: number;
}