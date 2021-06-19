import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';

import { SpecialtiesService } from './specialties.service';

describe('SpecialtiesService', () => {
  let service: SpecialtiesService;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpecialtiesService,
        {
          provide: getRepositoryToken(Specialty),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<SpecialtiesService>(SpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
