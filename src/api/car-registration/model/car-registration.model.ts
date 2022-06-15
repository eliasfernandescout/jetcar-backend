import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  category: { type: String, required: true },
});

export interface Car {
  licensePlate: string;
  dailyPrice: number;
  brand: string;
  model: string;
  year: string;
  category: string;
}
