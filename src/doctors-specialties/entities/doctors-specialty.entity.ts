import { Doctor } from 'src/doctors/entities/doctor.entity';
import { Specialty } from 'src/specialties/entities/specialty.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('doctors_specialties_specialties')
export class DoctorsSpecialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  doctorId: string;

  @Column('uuid')
  specialtiesId: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.doctorsSpecialty)
  doctor: Doctor;

  @ManyToOne(() => Specialty, (specialty) => specialty.doctorsSpecialty)
  specialty: Specialty;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
