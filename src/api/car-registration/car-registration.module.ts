import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CarRegistrationController } from './controllers/car-registration.controller';
import { CarRegistrationService } from './services/car-registration.service';
import { CarsSchema } from './model/car-registration.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarsSchema }])],
  providers: [CarRegistrationService],
  controllers: [CarRegistrationController],
})
export class CarRegistrationModule {}
