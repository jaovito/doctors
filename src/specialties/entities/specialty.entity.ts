import { Doctor } from 'src/doctors/entities/doctor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('doctor_specialties')
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  doctor: Doctor[];

  @Column()
  name: string;

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
