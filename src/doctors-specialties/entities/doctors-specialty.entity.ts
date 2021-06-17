import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors_specialties_specialties')
export class DoctorsSpecialty {
  @PrimaryGeneratedColumn('uuid')
  doctorId: string;

  @PrimaryGeneratedColumn('uuid')
  specialtyId: string;
}
