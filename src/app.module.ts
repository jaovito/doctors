import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialtiesModule } from './specialties/specialties.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DoctorsSpecialtiesModule } from './doctors-specialties/doctors-specialties.module';

@Module({
  imports: [SpecialtiesModule, DoctorsModule, TypeOrmModule.forRoot(), DoctorsSpecialtiesModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
