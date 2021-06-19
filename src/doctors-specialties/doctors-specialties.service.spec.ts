import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DoctorsSpecialtiesService } from './doctors-specialties.service';
import { DoctorsSpecialty } from './entities/doctors-specialty.entity';

describe('DoctorsSpecialtiesService', () => {
  let service: DoctorsSpecialtiesService;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoctorsSpecialtiesService,
        {
          provide: getRepositoryToken(DoctorsSpecialty),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<DoctorsSpecialtiesService>(DoctorsSpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
