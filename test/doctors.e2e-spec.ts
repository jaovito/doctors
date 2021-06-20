import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { DoctorsModule } from '../src/doctors/doctors.module';
import { Doctor } from '../src/doctors/entities/doctor.entity';
import { Specialty } from '../src/specialties/entities/specialty.entity';
import { DoctorsSpecialty } from '../src/doctors-specialties/entities/doctors-specialty.entity';
import databaseTest from './databaseTest';

describe('Doctors (e2e)', () => {
  let app: INestApplication;
  let defaultDoctor: Doctor;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        DoctorsModule,
        TypeOrmModule.forRoot({
          type: databaseTest.type as any,
          host: databaseTest.host,
          port: databaseTest.port,
          username: databaseTest.username,
          password: databaseTest.password,
          database: databaseTest.database,
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

    const response = await request(app.getHttpServer()).post('/doctors').send({
      name: 'John Doe',
      crm: 123456,
      telephone: 1588193921,
      celphone: 1598193921,
      cep: 18077500,
    });

    defaultDoctor = response.body;
  });

  it('should be able to POST and create an doctor', async () => {
    return await request(app.getHttpServer())
      .post('/doctors')
      .send({
        name: 'John Doe 2',
        crm: 123456,
        telephone: 1588193921,
        celphone: 1598193921,
        cep: 18077500,
      })
      .expect(201);
  });

  it('should be able to GET all doctors', async () => {
    return await request(app.getHttpServer()).get('/doctors').expect(200);
  });

  it('should be able to GET search an doctor', async () => {
    return await request(app.getHttpServer())
      .get(`/doctors?name=${defaultDoctor.name}`)
      .expect(200);
  });

  it('should be able to GET an doctor by id', async () => {
    return await request(app.getHttpServer())
      .get(`/doctors/${defaultDoctor.id}`)
      .expect(200);
  });

  it('should be able to PATCH an doctor', async () => {
    return await request(app.getHttpServer())
      .patch(`/doctors/${defaultDoctor.id}`)
      .send({
        name: 'John Doe UPDATED',
        crm: 789123,
      })
      .expect(200);
  });

  it('should be able to soft DELETE an doctor', async () => {
    return await request(app.getHttpServer())
      .delete(`/doctors/${defaultDoctor.id}`)
      .expect(200);
  });

  afterAll(async () => {
    const connection = app.get(Connection);
    await connection.close();
    await app.close();
  });
});
