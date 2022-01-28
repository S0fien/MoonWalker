import { Module } from '@nestjs/common';
import { AstronautsService } from './astronauts.service';
import { AstronautsController } from './astronauts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Astronaut } from './entities/astronaut.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Astronaut])],
  controllers: [AstronautsController],
  providers: [AstronautsService],
})
export class AstronautsModule {}
