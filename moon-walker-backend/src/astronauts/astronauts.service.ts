/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAstronautDto } from './dto/create-astronaut.dto';
import { UpdateAstronautDto } from './dto/update-astronaut.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Astronaut } from './entities/astronaut.entity';

@Injectable()
export class AstronautsService {
  constructor(
    @InjectRepository(Astronaut)
    private readonly repository: Repository<Astronaut>,
  ) {}

  create(createAstronautDto: CreateAstronautDto): Promise<Astronaut> {
    // @ts-ignore
    const astronaut = this.repository.create(createAstronautDto);
    // @ts-ignore
    return this.repository.save(astronaut);
  }

  findAll(): Promise<Astronaut[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Astronaut> {
    return this.repository.findOne(id);
  }

  async update(
    id: string,
    updateAstronautDto: UpdateAstronautDto,
  ): Promise<Astronaut> {
    // @ts-ignore
    const astronaut = await this.repository.preload({
      id: id,
      ...updateAstronautDto,
    });
    if (!astronaut) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(astronaut);
  }

  async remove(id: string) {
    const astronaut = await this.findOne(id);
    return this.repository.remove(astronaut);
  }
}
