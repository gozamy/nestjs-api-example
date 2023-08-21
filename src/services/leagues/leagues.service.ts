import { Injectable, HttpService } from '@nestjs/common';

import { ConfigService } from 'nestjs-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LeaguesService {

    private readonly monkUrl: string;
    private readonly tokenQuery: string;
    private readonly key: string;

    constructor(private readonly config: ConfigService, private readonly http: HttpService) {
        this.monkUrl = this.config.get('sport-monks-config.monksUrl');
        this.tokenQuery = this.config.get('sport-monks-config.tokenQuery');
        this.key = this.config.get('sport-monks-config.key');
    }

    // Gets a list of all available leagues
    getAll(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key)
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include country
    getAllIncludeCountry(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key + '&include=country')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include season
    getAllIncludeSeason(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key + '&include=season')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include seasons
    getAllIncludeSeasons(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key + '&include=seasons')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include country, season
    getAllIncludeCountryAndSeason(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key + '&include=country, season')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include country, seasons
    getAllIncludeCountryAndSeasons(): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + this.tokenQuery + this.key + '&include=country, seasons')
            .pipe(map(res => res.data));
    }

    // Get country by id
    getById(id: string): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues/' + id + this.tokenQuery + this.key)
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include country
    getByIdIncludeCountry(id: string): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + id  + this.tokenQuery + this.key + '&include=country')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include season
    getByIdIncludeSeason(id: string): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + id + this.tokenQuery + this.key + '&include=season')
            .pipe(map(res => res.data));
    }

    // Gets a list of all available leagues and include country, season
    getByIdIncludeCountryAndSeason(id: string): Observable<any> {
        return this.http
            .get(this.monkUrl + 'leagues' + id + this.tokenQuery + this.key + '&include=country, season')
            .pipe(map(res => res.data));
    }
}
