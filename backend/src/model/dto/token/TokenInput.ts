import {IsString} from "class-validator";

export class TokenInput{
  @IsString()
  token: string
}