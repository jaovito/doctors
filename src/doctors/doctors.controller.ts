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
  HttpService,
} from '@nestjs/common';
import axios from 'axios';
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
      name: yup.string().max(120).required(),
      crm: yup
        .number()
        .test(
          'len',
          'CRM field must have exactly 6 digits',
          (number) => String(number).length >= 6,
        )
        .required(),
      telephone: yup
        .number()
        .test(
          'len',
          'Telephone field must have exactly 8 digits',
          (number) => String(number).length >= 8,
        )
        .required(),
      celphone: yup
        .number()
        .test(
          'len',
          'Celphone field must have exactly 9 digits',
          (number) => String(number).length >= 9,
        )
        .required(),
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

    const response = await axios.get(
      `http://viacep.com.br/ws/${createDoctorDto.cep}/json/`,
    );

    return {
      doctor: await this.doctorsService.create(createDoctorDto),
      address: response.data,
    };
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get('search')
  async search(@Query() searchDoctorDto: SearchDoctorDto) {
    const schema = yup.object().shape({
      name: yup.string().max(120),
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
  async findOne(@Param('id') id: string) {
    const schema = yup.object().shape({
      id: yup.string().uuid().required(),
    });

    try {
      await schema.validate({ id });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    const schema = yup.object().shape({
      id: yup.string().uuid().required(),
    });

    try {
      await schema.validate({ id });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const schema = yup.object().shape({
      id: yup.string().uuid().required(),
    });

    try {
      await schema.validate({ id });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doctorsService.remove(id);
  }
}
