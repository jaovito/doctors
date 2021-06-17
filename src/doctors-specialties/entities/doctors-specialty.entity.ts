import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctor_specialties_specialty')
export class DoctorsSpecialty {
  @PrimaryGeneratedColumn('uuid')
  doctorId: string;

  @PrimaryGeneratedColumn('uuid')
  specialtyId: string;
}
