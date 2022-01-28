import { Test, TestingModule } from '@nestjs/testing';
import { AstronautsController } from './astronauts.controller';
import { AstronautsService } from './astronauts.service';

describe('AstronautsController', () => {
  let controller: AstronautsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstronautsController],
      providers: [AstronautsService],
    }).compile();

    controller = module.get<AstronautsController>(AstronautsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
