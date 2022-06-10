import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  dailyPrice: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  category: { type: String, required: true },
});

export interface Car {
  cardId: string;
  dailyPrice: string;
  brand: string;
  model: string;
  year: string;
  category: string;
}
