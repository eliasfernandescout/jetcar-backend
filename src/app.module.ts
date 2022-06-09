import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
import { CarRegistrationModule } from './api/car-registration/car-registration.module';

@Module({
  imports: [CarRegistrationModule
    //PASSAR INIT MONGO
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
