import { Module } from '@nestjs/common';
import { DoctorsSpecialtiesService } from './doctors-specialties.service';
import { DoctorsSpecialtiesController } from './doctors-specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsSpecialty } from './entities/doctors-specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorsSpecialty])],
  controllers: [DoctorsSpecialtiesController],
  providers: [DoctorsSpecialtiesService],
})
export class DoctorsSpecialtiesModule {}
