import { IsNumber, IsString, MinLength } from 'class-validator';

export class myDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsNumber()
  age: number;
}
