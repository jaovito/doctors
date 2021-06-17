import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Specialty } from 'src/specialties/entities/specialty.entity';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Specialty)
  @JoinTable()
  specialties: Specialty[];

  @Column()
  name: string;

  @Column()
  crm: number;

  @Column()
  telephone: number;

  @Column()
  celphone: number;

  @Column()
  cep: number;

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
