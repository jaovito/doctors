import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesController } from './specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { Doctor } from '../doctors/entities/doctor.entity';
import { DoctorsSpecialty } from '../doctors-specialties/entities/doctors-specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty, Doctor, DoctorsSpecialty])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
})
export class SpecialtiesModule {}
