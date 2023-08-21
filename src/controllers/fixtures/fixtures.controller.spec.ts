import { Test, TestingModule } from '@nestjs/testing';
import { FixturesController } from './fixtures.controller';
import { FixturesService } from '../../services/fixtures/fixtures.service';
import { MockService } from '../../mocks/mock-service';

describe('Fixtures Controller', () => {
  let controller: FixturesController;
  let service: FixturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixturesController],
      providers: [{
        provide: FixturesService,
        useClass: MockService,
        // useValue: {
        //   GetAll: jest.fn(),
        // },
      }],
    }).compile();

    service = module.get<FixturesService>(FixturesService);
    controller = module.get<FixturesController>(FixturesController);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
