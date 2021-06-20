import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppModule } from '../src/app.module';
import { SpecialtiesModule } from '../src/specialties/specialties.module';
import { Specialty } from '../src/specialties/entities/specialty.entity';
import { Doctor } from '../src/doctors/entities/doctor.entity';
import { DoctorsSpecialty } from '../src/doctors-specialties/entities/doctors-specialty.entity';

describe('Specialties (e2e)', () => {
  let app: INestApplication;
  let defaultSpecialty: Specialty;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        SpecialtiesModule,
        TypeOrmModule.forRoot({
          type: 'mysql',
          name: 'test',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'docker',
          database: 'doctors_test',
          entities: [Doctor, Specialty, DoctorsSpecialty],
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    const response = await request(app.getHttpServer())
      .post('/specialties')
      .send({
        name: 'Cirurgião',
      });

    defaultSpecialty = response.body;
  });

  it('should be able to POST an create an specialty', () => {
    return request(app.getHttpServer())
      .post('/specialties')
      .send({
        name: 'Cirurgião 2',
      })
      .expect(201);
  });

  it('should be able to GET all specialties', () => {
    return request(app.getHttpServer()).get('/specialties').expect(200);
  });

  it('should be able to GET an specialty by id', () => {
    return request(app.getHttpServer())
      .get(`/specialties/${defaultSpecialty.id}`)
      .expect(200);
  });

  it('should be able to PATCH an specialty', () => {
    return request(app.getHttpServer())
      .patch(`/specialties/${defaultSpecialty.id}`)
      .send({
        name: 'Cirurgião UPDATED',
      })
      .expect(200);
  });

  it('should be able to DELETE an specialty', () => {
    return request(app.getHttpServer())
      .delete(`/specialties/${defaultSpecialty.id}`)
      .expect(200);
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
    await app.close();
  });
});
