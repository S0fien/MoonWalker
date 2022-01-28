import { CreateAstronautDto } from './create-astronaut.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateAstronautDto extends PartialType(CreateAstronautDto) {}
