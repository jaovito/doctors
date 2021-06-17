import { DoctorsSpecialty } from 'src/doctors-specialties/entities/doctors-specialty.entity';
import { Doctor } from 'src/doctors/entities/doctor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('specialties')
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  @JoinColumn()
  specialties: Doctor[];

  @OneToMany(
    () => DoctorsSpecialty,
    (doctorsSpecialty) => doctorsSpecialty.doctor,
  )
  public doctorsSpecialty!: DoctorsSpecialty[];

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
