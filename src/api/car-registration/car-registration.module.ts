import { Module } from '@nestjs/common';
import { CarRegistrationController } from './controllers/car-registration.controller';
import { CarRegistrationService } from './services/car-registration.service';


@Module({
  imports: [],
  providers: [CarRegistrationController],
  controllers: [CarRegistrationService],
})
export class CarRegistrationModule { }
