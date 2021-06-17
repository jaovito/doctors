import { Module } from '@nestjs/common';
import { DoctorsSpecialtiesService } from './doctors-specialties.service';
import { DoctorsSpecialtiesController } from './doctors-specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsSpecialty } from './entities/doctors-specialty.entity';
import { Specialty } from 'src/specialties/entities/specialty.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorsSpecialty, Specialty, Doctor])],
  controllers: [DoctorsSpecialtiesController],
  providers: [DoctorsSpecialtiesService],
})
export class DoctorsSpecialtiesModule {}
