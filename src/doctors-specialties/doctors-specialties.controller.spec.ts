import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DoctorsSpecialtiesController } from './doctors-specialties.controller';
import { DoctorsSpecialtiesService } from './doctors-specialties.service';
import { DoctorsSpecialty } from './entities/doctors-specialty.entity';

describe('DoctorsSpecialtiesController', () => {
  let controller: DoctorsSpecialtiesController;
  let service: DoctorsSpecialtiesService;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsSpecialtiesController],
      providers: [
        DoctorsSpecialtiesService,
        {
          provide: getRepositoryToken(DoctorsSpecialty),
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<DoctorsSpecialtiesController>(
      DoctorsSpecialtiesController,
    );
    service = module.get<DoctorsSpecialtiesService>(DoctorsSpecialtiesService);
  });

  it('should be able to create an relation Doctor and Specialty', async () => {
    const doctorSpecialty = {
      doctorId: '5b10c4f8-1497-4e27-b3bf-9952ba897f52',
      specialtyId: 'e449f53b-e0fb-476a-ac4b-7ea55b0fecbd',
    };

    const SPY = jest.fn(() => doctorSpecialty) as any;
    jest
      .spyOn(service, 'create')
      .mockImplementation(() => SPY(doctorSpecialty));

    expect(await controller.create(doctorSpecialty)).toBe(doctorSpecialty);
  });
});
