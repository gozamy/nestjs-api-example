import { Test, TestingModule } from '@nestjs/testing';
import { CommentariesService } from './commentaries.service';
import { MockService } from '../../mocks/mock-service';

describe('CommentariesService', () => {
  let service: CommentariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentariesService, {provide: CommentariesService, useClass: MockService}],
    }).compile();

    service = module.get<CommentariesService>(CommentariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
