import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AstronautsService } from './astronauts.service';
import { CreateAstronautDto } from './dto/create-astronaut.dto';
import { UpdateAstronautDto } from './dto/update-astronaut.dto';

@Controller('astronauts')
export class AstronautsController {
  constructor(private readonly astronautsService: AstronautsService) {}

  @Post()
  create(@Body() createAstronautDto: CreateAstronautDto) {
    return this.astronautsService.create(createAstronautDto);
  }

  @Get()
  findAll() {
    return this.astronautsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.astronautsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAstronautDto: UpdateAstronautDto,
  ) {
    return this.astronautsService.update(id, updateAstronautDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.astronautsService.remove(id);
  }
}
