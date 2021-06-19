import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';

describe('SpecialtiesController', () => {
  let specialtyController: SpecialtiesController;
  let specialtyService: SpecialtiesService;
  let firstSpecialty: Specialty | any;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const moduleRef = await Test.createTestingModule({
      controllers: [SpecialtiesController],
      providers: [
        SpecialtiesService,
        {
          provide: getRepositoryToken(Specialty),
          useValue: mockRepository,
        },
      ],
    }).compile();

    specialtyService = moduleRef.get<SpecialtiesService>(SpecialtiesService);
    specialtyController = moduleRef.get<SpecialtiesController>(
      SpecialtiesController,
    );

    const specialty = {
      id: '28bea15c-6bfa-4096-94b7-1841c0e8a3c5',
      name: 'Cirurgião',
      created_at: '2021-06-19T16:29:14.000Z',
      updated_at: '2021-06-19T16:29:14.000Z',
    } as any;

    const SPY = jest.fn(() => specialty) as any;
    jest
      .spyOn(specialtyService, 'create')
      .mockImplementation(() => SPY(specialty));
    firstSpecialty = await specialtyController.create(specialty);
  });

  describe('Find types for specialty', () => {
    it('should be able to find all specialties', async () => {
      const result = [firstSpecialty] as any;
      jest.spyOn(specialtyService, 'findAll').mockImplementation(() => result);

      expect(await specialtyController.findAll()).toBe(result);
    });

    it('should be able to find one specialty', async () => {
      const result = firstSpecialty;
      jest.spyOn(specialtyService, 'findOne').mockImplementation(() => result);

      expect(await specialtyController.findOne(firstSpecialty.id)).toBe(
        firstSpecialty,
      );
    });
  });
});
