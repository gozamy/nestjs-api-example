import { Test, TestingModule } from '@nestjs/testing';
import { LeaguesService } from './leagues.service';
import { MockService } from '../../mocks/mock-service';

describe('LeaguesService', () => {
  let service: LeaguesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaguesService , { provide: LeaguesService, useClass: MockService }],
    }).compile();

    service = module.get<LeaguesService>(LeaguesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
