import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('register')
  register(@Body() car: Car) {
    return this.carRegistrationService.registerCar(car);
  }
}
