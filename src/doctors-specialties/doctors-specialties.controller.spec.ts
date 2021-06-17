import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsSpecialtiesController } from './doctors-specialties.controller';
import { DoctorsSpecialtiesService } from './doctors-specialties.service';

describe('DoctorsSpecialtiesController', () => {
  let controller: DoctorsSpecialtiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsSpecialtiesController],
      providers: [DoctorsSpecialtiesService],
    }).compile();

    controller = module.get<DoctorsSpecialtiesController>(DoctorsSpecialtiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
