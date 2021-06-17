import { PartialType } from '@nestjs/mapped-types';

import { CreateDoctorsSpecialtyDto } from './create-doctors-specialty.dto';

export class UpdateDoctorsSpecialtyDto extends PartialType(
  CreateDoctorsSpecialtyDto,
) {}
