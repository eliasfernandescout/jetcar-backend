import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCarRegistrationDto {
  @IsString()
  @IsNotEmpty()
  licensePlate: string;

  @IsNumber()
  @IsNotEmpty()
  dailyPrice: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
