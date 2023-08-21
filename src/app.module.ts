import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

// Controllers
import { AppController } from './app.controller';

import { CommentariesController } from './controllers/commentaries/commentaries.controller';
import { FixturesController } from './controllers/fixtures/fixtures.controller';
import { LeaguesController } from './controllers/leagues/leagues.controller';
// Services
import { AppService } from './app.service';

import { CommentariesService } from './services/commentaries/commentaries.service';
import { FixturesService } from './services/fixtures/fixtures.service';
import { LeaguesService } from './services/leagues/leagues.service';


@Module({
  imports: [
    HttpModule,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
  ],
  controllers: [
    AppController,
    LeaguesController,
    FixturesController,
    CommentariesController,
  ],
  providers: [
    AppService,
    LeaguesService,
    FixturesService,
    CommentariesService,
  ],
})
export class AppModule { }
