import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Car } from '../model/car-registration.model';
import { CarRegistrationService } from '../services/car-registration.service';

@Controller('car')
export class CarRegistrationController {
  constructor(
    private readonly carRegistrationService: CarRegistrationService,
  ) {}

  @Get('list')
  findAll() {
    return this.carRegistrationService.getAll();
  }

  @Get('list-by-id')
  findById() {
    return this.carRegistrationService.getById();
  }

  @Get('list-by-category')
  findByCategory() {
    return this.carRegistrationService.getByCategory();
  }

  @Get('list-suvs')
  findByCategorySUV() {
    return this.carRegistrationService.getByCategorySUV();
  }

  @Post('car-register')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.CREATED)
  register(@Body() car: Car) {
    // response.status(204).send('Registro criado com sucesso!');
    return this.carRegistrationService.registerCar(car);
  }
}
