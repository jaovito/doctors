import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = this.doctorsRepository.create(createDoctorDto);
    await this.doctorsRepository.save(doctor);
    return doctor;
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find();
  }

  findOne(id: string): Promise<Doctor> {
    return this.doctorsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.doctorsRepository.delete(id);
  }
}
