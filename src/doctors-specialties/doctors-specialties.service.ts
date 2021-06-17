import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDoctorsSpecialtyDto } from './dto/create-doctors-specialty.dto';
import { DoctorsSpecialty } from './entities/doctors-specialty.entity';

@Injectable()
export class DoctorsSpecialtiesService {
  constructor(
    @InjectRepository(DoctorsSpecialty)
    private doctorsSpecialtyRepository: Repository<DoctorsSpecialty>,
  ) {}

  async create(
    createDoctorsSpecialtyDto: CreateDoctorsSpecialtyDto,
  ): Promise<DoctorsSpecialty> {
    const doctorSpecialty = this.doctorsSpecialtyRepository.create(
      createDoctorsSpecialtyDto,
    );
    await this.doctorsSpecialtyRepository.save(doctorSpecialty);

    return doctorSpecialty;
  }
}
