import { Test, TestingModule } from '@nestjs/testing';
import { FixturesService } from './fixtures.service';
import { MockService } from '../../mocks/mock-service';

describe('FixturesService', () => {
  let service: FixturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FixturesService, {provide: FixturesService, useClass: MockService}],
    }).compile();

    service = module.get<FixturesService>(FixturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
