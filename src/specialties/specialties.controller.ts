import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as yup from 'yup';

import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Controller('specialties')
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Post()
  async create(@Body() createSpecialtyDto: CreateSpecialtyDto) {
    const schema = yup.object().shape({
      name: yup.string().required(),
    });

    try {
      await schema.validate(createSpecialtyDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.specialtiesService.create(createSpecialtyDto);
  }

  @Get()
  findAll() {
    return this.specialtiesService.findAll();
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

    return this.specialtiesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSpecialtyDto: UpdateSpecialtyDto,
  ) {
    const schema = yup.object().shape({
      id: yup.string().uuid().required(),
      name: yup.string().required(),
    });

    try {
      await schema.validate({ id, name: updateSpecialtyDto.name });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          errors: err.errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.specialtiesService.update(id, updateSpecialtyDto);
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

    return this.specialtiesService.remove(id);
  }
}
