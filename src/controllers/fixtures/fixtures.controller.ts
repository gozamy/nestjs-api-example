import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { FixturesService } from '../../services/fixtures/fixtures.service';
@ApiUseTags('Fixtures')
@Controller('fixtures')
export class FixturesController {

    private readonly monkUrl: string;
    private readonly tokenQuery: string;
    private readonly key: string;

    constructor(private service: FixturesService) {}

    // Endpoint:	https://soccer.sportmonks.com/api/v2.0/fixtures/between/__STARTDATE__/__ENDDATE__/__TEAMID__?api_token=
    // Date presented in YYYY-MM-DD format.
    @Get(':startdate/:enddate/:teamid')
    @ApiOperation({ title: 'Gets Team Fixtures for the Season'})
    GetByDateRangeForTeam(@Param('startdate') startDate: string, @Param('enddate') endDate: string, @Param('teamid') teamId: string) {
        return this.service.getByDateRangeForTeam(startDate, endDate, teamId);
    }

    

}
