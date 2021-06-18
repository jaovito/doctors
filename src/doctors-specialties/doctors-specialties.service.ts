import { HttpException, Injectable } from '@nestjs/common';
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
    const doctorSpecialtyQuantity = await this.doctorsSpecialtyRepository.find({
      where: { doctorId: createDoctorsSpecialtyDto.doctorId },
    });

    const doctorSpecialtyExists = await this.doctorsSpecialtyRepository.findOne(
      {
        where: { specialtyId: createDoctorsSpecialtyDto.specialtyId },
      },
    );

    if (doctorSpecialtyExists) {
      throw new HttpException('Doctor specialty already exists', 400);
    }

    if (doctorSpecialtyQuantity.length >= 2) {
      throw new HttpException('Doctor already has 2 specialties', 400);
    }

    const doctorSpecialty = this.doctorsSpecialtyRepository.create(
      createDoctorsSpecialtyDto,
    );
    await this.doctorsSpecialtyRepository.save(doctorSpecialty);

    return doctorSpecialty;
  }
}
