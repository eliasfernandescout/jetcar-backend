import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import e from 'express';
import { diskStorage } from 'multer';
// import * as path from 'path';
import path from 'path';
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

  // @Post('car-register')
  // @UseInterceptors(FileInterceptor('file'))
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './src/api/car-imgs',
  //       filename: (req, file, callBack) => {
  //         const fileName =
  //           path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
  //         const extension = path.parse(file.originalname).ext;
  //         callBack(null, `${fileName}${extension}`);
  //       },
  //     }),
  //   }),
  // )
  // @HttpCode(HttpStatus.CREATED)
  // register(@Body() car: Car, @Res() res, @UploadedFile() file) {
  //   const fileUploadSuccess = res.status(HttpStatus.OK).json({
  //     success: true,
  //     data: file.path,
  //   });
  //   const carRegistrationSuccess = this.carRegistrationService.registerCar(car);
  //   return { fileUploadSuccess, carRegistrationSuccess };
  // }

  // @Post('upload-img')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './src/api/carImgs',
  //       filename: (req, file, callBack) => {
  //         const fileName =
  //           path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
  //         const extension = path.parse(file.originalname).ext;
  //         callBack(null, `${fileName}${extension}`);
  //       },
  //     }),
  //   }),
  // )
  // uploadImg(@Res() res, @UploadedFile() file) {
  //   return res.status(HttpStatus.OK).json({
  //     success: true,
  //     data: file.path,
  //   });
  // }

  @Post('upload-img')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './src/api/carImgs',
        filename(
          req: e.Request,
          file: Express.Multer.File,
          callBack: (error: Error | null, filename: string) => void,
        ) {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split('.').join('_') + '_' + Date.now() + '_' + fileExtension;

          callBack(null, newFileName);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
