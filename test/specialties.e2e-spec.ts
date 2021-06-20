import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Specialty } from '../src/specialties/entities/specialty.entity';
import { SpecialtiesModule } from '../src/specialties/specialties.module';
import { Doctor } from '../src/doctors/entities/doctor.entity';
import { DoctorsSpecialty } from '../src/doctors-specialties/entities/doctors-specialty.entity';
import { Connection } from 'typeorm';

describe('Specialties (e2e)', () => {
  let app: INestApplication;
  let defaultSpecialty: Specialty;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        SpecialtiesModule,
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'docker',
          database: 'doctors_test',
          entities: [Doctor, Specialty, DoctorsSpecialty],
          synchronize: false,
          migrations: ['../dist/database/migrations/*.js'],
          cli: {
            migrationsDir: '../dist/database/migrations',
          },
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const connection = app.get(Connection);
    await connection.runMigrations();

    const response = await request(app.getHttpServer())
      .post('/specialties')
      .send({
        name: 'Cardiologista infantil',
      });

    defaultSpecialty = response.body;
  });

  it('should be able to POST and create an specialty', async () => {
    return await request(app.getHttpServer())
      .post('/specialties')
      .send({
        name: 'Cirurgião Dentista',
      })
      .expect(201);
  });

  it('should be able to GET all specialties', async () => {
    return await request(app.getHttpServer()).get('/specialties').expect(200);
  });

  it('should be able to GET an specialty by id', async () => {
    return await request(app.getHttpServer())
      .get(`/specialties/${defaultSpecialty.id}`)
      .expect(200);
  });

  it('should be able to PATCH an doctor', async () => {
    return await request(app.getHttpServer())
      .patch(`/specialties/${defaultSpecialty.id}`)
      .send({
        name: 'Cirurgião',
      })
      .expect(200);
  });

  it('should be able to soft DELETE an doctor', async () => {
    return await request(app.getHttpServer())
      .delete(`/specialties/${defaultSpecialty.id}`)
      .expect(200);
  });

  afterAll(async () => {
    const connection = app.get(Connection);
    await connection.close();
    await app.close();
  });
});
