import { Test, TestingModule } from '@nestjs/testing';

import { DoctorsSpecialtiesService } from './doctors-specialties.service';

describe('DoctorsSpecialtiesService', () => {
  let service: DoctorsSpecialtiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorsSpecialtiesService],
    }).compile();

    service = module.get<DoctorsSpecialtiesService>(DoctorsSpecialtiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
