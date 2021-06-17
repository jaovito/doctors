import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { Doctor } from './entities/doctor.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from 'src/specialties/entities/specialty.entity';
import { DoctorsSpecialty } from 'src/doctors-specialties/entities/doctors-specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Specialty, DoctorsSpecialty])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
