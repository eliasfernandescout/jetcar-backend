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

  @Post('register')
  register(@Body() car: Car) {
    return this.carRegistrationService.registerCar(car);
  }
}
