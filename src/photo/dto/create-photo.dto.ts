import { IsNumber, IsString } from "class-validator";

export class CreatePhotoDto {
  @IsNumber()
  userId: number

  @IsString()
  name: string;

  @IsString()
  url: string;
}
