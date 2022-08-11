import { Entity } from "typeorm";
import { IsNumber, IsPositive } from "class-validator";

@Entity()
export class UpdateProductDto {
  @IsPositive()
  @IsNumber()
  stock: number;
}
