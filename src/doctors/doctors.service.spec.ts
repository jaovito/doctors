import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';

describe('DoctorsService', () => {
  let service: DoctorsService;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoctorsService,
        {
          provide: getRepositoryToken(Doctor),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<DoctorsService>(DoctorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
