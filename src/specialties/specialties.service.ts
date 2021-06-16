import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class SpecialtiesService {
  constructor(
    @InjectRepository(Specialty)
    private specialtyRepository: Repository<Specialty>,
  ) {}

  async create(createSpecialtyDto: CreateSpecialtyDto) {
    const doctor = this.specialtyRepository.create(createSpecialtyDto);
    await this.specialtyRepository.save(doctor);
    return doctor;
  }

  findAll(): Promise<Specialty[]> {
    return this.specialtyRepository.find();
  }

  findOne(id: string): Promise<Specialty> {
    return this.specialtyRepository.findOne(id);
  }

  async update(
    id: string,
    updateSpecialtyDto: UpdateSpecialtyDto,
  ): Promise<Specialty> {
    const specialty = await this.specialtyRepository
      .update({ id }, updateSpecialtyDto)
      .then((response) => response.raw[0]);

    return specialty;
  }

  async remove(id: string): Promise<void> {
    await this.specialtyRepository.delete(id);
  }
}
