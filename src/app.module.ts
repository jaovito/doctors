import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtiesModule } from './specialties/specialties.module';
import { DoctorsSpecialtiesModule } from './doctors-specialties/doctors-specialties.module';
import { Doctor } from './doctors/entities/doctor.entity';
import { Specialty } from './specialties/entities/specialty.entity';
import { DoctorsSpecialty } from './doctors-specialties/entities/doctors-specialty.entity';

@Module({
  imports: [
    SpecialtiesModule,
    DoctorsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'docker',
      database: 'doctors',
      entities: [Doctor, Specialty, DoctorsSpecialty],
      synchronize: true,
    }),
    DoctorsSpecialtiesModule,
  ],
  exports: [TypeOrmModule],
})
export class AppModule {}
