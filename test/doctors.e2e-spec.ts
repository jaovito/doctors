import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../src/app.module';
import { DoctorsModule } from '../src/doctors/doctors.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, DoctorsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to GET all doctors', () => {
    return request(app.getHttpServer()).get('/doctors').expect(200);
  });

  it('should be able to GET search an doctor', () => {
    return request(app.getHttpServer()).get('/doctors?name=Joao').expect(200);
  });

  it('should be able to GET an doctor by id', () => {
    return request(app.getHttpServer()).get('/doctors/ ').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
