import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtiesModule } from './specialties/specialties.module';
import { DoctorsSpecialtiesModule } from './doctors-specialties/doctors-specialties.module';

@Module({
  imports: [
    SpecialtiesModule,
    DoctorsModule,
    TypeOrmModule.forRoot(),
    DoctorsSpecialtiesModule,
  ],
  exports: [TypeOrmModule],
})
export class AppModule {}
