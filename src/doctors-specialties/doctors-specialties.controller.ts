import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { DoctorsSpecialtiesService } from './doctors-specialties.service';
import { CreateDoctorsSpecialtyDto } from './dto/create-doctors-specialty.dto';
import { UpdateDoctorsSpecialtyDto } from './dto/update-doctors-specialty.dto';

@Controller('doctors-specialties')
export class DoctorsSpecialtiesController {
  constructor(
    private readonly doctorsSpecialtiesService: DoctorsSpecialtiesService,
  ) {}

  @Post()
  create(@Body() createDoctorsSpecialtyDto: CreateDoctorsSpecialtyDto) {
    return this.doctorsSpecialtiesService.create(createDoctorsSpecialtyDto);
  }
}
