import { Controller, Get } from "@nestjs/common";
import { CarRegistrationService } from "../services/car-registration.service";


@Controller('car')

export class CarRegistrationController {
    constructor(private readonly carsRegistrationService: CarRegistrationService) { }

    @Get()
    findAll() {
        return this.carsRegistrationService.findAll()
    }
}
