import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as yup from 'yup';

import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { SearchDoctorDto } from './dto/search-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    // definindo schema de validação para o cadastro de médicos
    const schema = yup.object().shape({
      name: yup.string().required(),
      crm: yup.number().required(),
      telephone: yup.number().required(),
      celphone: yup.number().required(),
      cep: yup.number().required(),
    });

    // validação de dados do doutor
    try {
      await schema.validate(createDoctorDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get('search')
  async search(@Query() searchDoctorDto: SearchDoctorDto) {
    const schema = yup.object().shape({
      name: yup.string(),
      crm: yup.number(),
      telephone: yup.number(),
      celphone: yup.number(),
      cep: yup.number(),
    });

    try {
      await schema.validate(searchDoctorDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doctorsService.search(searchDoctorDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}
