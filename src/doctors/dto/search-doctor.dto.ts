import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorDto } from './create-doctor.dto';

export class SearchDoctorDto extends PartialType(CreateDoctorDto) {}
