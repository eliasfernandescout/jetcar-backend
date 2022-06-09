import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCarRegistrationDto } from '../dtos/car-registration.dto';
// import { Course } from './entities/course.entity';

@Injectable()
export class CarRegistrationService {
    private cars: CreateCarRegistrationDto[] = [
        {
            carId: 'id01',
            dailyPrice: 'R$ 900,00',
            brand: 'Fiat',
            model: 'Punto',
            year: '2013/2014',
            category: 'Compacto',

        }
    ];

    findAll() {
        return this.cars;
    }


}
