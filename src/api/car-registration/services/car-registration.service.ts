import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from '../model/car-registration.model';

@Injectable()
export class CarRegistrationService {
  constructor(@InjectModel('Car') private readonly casrModel: Model<Car>) {}

  async getAll() {
    return await this.casrModel.find().exec();
  }

  async getById() {
    return await this.casrModel.find({ cardId: { $exists: true } }).exec();
  }

  async getByCategory() {
    return await this.casrModel.find({ category: 'SUV' }).exec();
  }

  async getByCategorySUV() {
    return await this.casrModel.find({ category: 'SUV' }).exec();
  }

  async registerCar(car: Car) {
    const result = await new this.casrModel(car).save();
    return result.id;
  }
}
