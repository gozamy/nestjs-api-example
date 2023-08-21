import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { LeaguesService } from '../../services/leagues/leagues.service';
@ApiUseTags('Leagues')
@Controller('leagues')
export class LeaguesController {

    constructor(private service: LeaguesService) { }

    @Get()
    @ApiOperation({ title: 'Gets list of all leagues' })
    GetAll() {
        return this.service.getAll();
    }

    @Get()
    @ApiOperation({ title: 'Gets list of all leagues including season' })
    GetAllIncludeSeason() {
        return this.service.getAllIncludeSeason();
    }

    @Get()
    @ApiOperation({ title: 'Gets list of all leagues including season' })
    GetAllIncludeCountryAndSeason() {
        return this.service.getAllIncludeCountryAndSeason();
    }

    @Get()
    @ApiOperation({ title: 'Gets list of all leagues including seasons' })
    GetAllIncludeCountryAndSeasons() {
        return this.service.getAllIncludeCountryAndSeasons();
    }

    @Get(':id')
    @ApiOperation({ title: 'Gets league by id' })
    GetById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Get(':id')
    @ApiOperation({ title: 'Gets league by id including country' })
    GetByIdIncludeCountry(@Param('id') id: string) {
        return this.service.getByIdIncludeCountry(id);
    }

    @Get(':id')
    @ApiOperation({ title: 'Gets league by id including country' })
    GetByIncludeSeason(@Param('id') id: string) {
        return this.service.getByIdIncludeSeason(id);
    }

    @Get(':id')
    @ApiOperation({ title: 'Gets league by id including country' })
    GetByIdIncludeCountryAndSeason(@Param('id') id: string) {
        return this.service.getByIdIncludeCountryAndSeason(id);
    }



}
