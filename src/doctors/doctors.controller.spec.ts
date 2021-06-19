import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entities/doctor.entity';

describe('DoctorsController', () => {
  let doctorsController: DoctorsController;
  let doctorsService: DoctorsService;
  let firstDoctor: Doctor | any;

  beforeEach(async () => {
    const mockRepository = jest.fn(() => ({
      metadata: {
        columns: [],
        relations: [],
      },
    }));

    const moduleRef = await Test.createTestingModule({
      controllers: [DoctorsController],
      providers: [
        DoctorsService,
        {
          provide: getRepositoryToken(Doctor),
          useValue: mockRepository,
        },
      ],
    }).compile();

    doctorsService = moduleRef.get<DoctorsService>(DoctorsService);
    doctorsController = moduleRef.get<DoctorsController>(DoctorsController);

    const doctor = {
      id: '5b10c4f8-1497-4e27-b3bf-9952ba897f52',
      name: 'John Doe',
      crm: 123456,
      telephone: 1588193921,
      celphone: 15988193921,
      cep: 18077500,
      created_at: '2021-06-18T02:01:25.000Z',
      updated_at: '2021-06-18T02:06:39.000Z',
    };

    const SPY = jest.fn(() => doctor) as any;
    jest.spyOn(doctorsService, 'create').mockImplementation(() => SPY(doctor));
    firstDoctor = await doctorsController.create(doctor);
  });

  describe('Find Doctor(s)', () => {
    it('should return an array of doctors', async () => {
      const result = [firstDoctor] as any;
      jest.spyOn(doctorsService, 'findAll').mockImplementation(() => result);

      expect(await doctorsController.findAll()).toBe(result);
    });

    it('should be able to search an doctor', async () => {
      const result = firstDoctor;
      jest.spyOn(doctorsService, 'search').mockImplementation(() => result);

      expect(await doctorsController.search({ name: 'John' })).toBe(result);
    });

    it('should be able to find an doctor', async () => {
      const id = firstDoctor.id;
      const result = firstDoctor;
      jest.spyOn(doctorsService, 'findOne').mockImplementation(() => result);

      expect(await doctorsController.findOne(id)).toBe(result);
    });
  });

  describe('Create, Update and Soft Delete', () => {
    it('should be able to create an doctor', async () => {
      const doctor = firstDoctor;

      const result = {} as any;
      jest.spyOn(doctorsService, 'create').mockImplementation(() => result);

      expect(await doctorsController.create(doctor)).toBe(result);
    });

    it('should be able to update an doctor', async () => {
      const doctor = {
        name: 'John Doe Updated',
        crm: 789123,
        telephone: 1588193921,
        celphone: 15988193921,
        cep: 18077300,
      };

      const result = {} as any;
      jest.spyOn(doctorsService, 'update').mockImplementation(() => result);

      expect(await doctorsController.update(firstDoctor.id, doctor)).toBe(
        result,
      );
    });

    it('should be able to soft delete an doctor', async () => {
      jest
        .spyOn(doctorsService, 'remove')
        .mockImplementation(() => firstDoctor);

      expect(await doctorsController.remove(firstDoctor.id)).toBe(firstDoctor);
    });
  });
});
