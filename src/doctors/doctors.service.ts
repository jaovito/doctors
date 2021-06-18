import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDoctorDto } from './dto/create-doctor.dto';
import { SearchDoctorDto } from './dto/search-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

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

  async search(searchDoctorDto: SearchDoctorDto) {
    const doctor = await this.doctorsRepository.findOne({
      where: searchDoctorDto,
    });

    if (!doctor) {
      throw new HttpException('Doctor does not exists', 400);
    }

    return doctor;
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find({
      where: { isDeleted: false },
      relations: ['specialties'],
    });
  }

  findOne(id: string): Promise<Doctor> {
    return this.doctorsRepository.findOne(id, { relations: ['specialties'] });
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto): Promise<Doctor> {
    const specialty = await this.doctorsRepository
      .update({ id }, updateDoctorDto)
      .then((response) => response.raw[0]);

    return specialty;
  }

  async remove(id: string): Promise<void> {
    const doctor = await this.findOne(id);

    doctor.isDeleted = true;
    await this.doctorsRepository.save(doctor);
  }
}
