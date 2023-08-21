import { Injectable, HttpService } from '@nestjs/common';

import { ConfigService } from 'nestjs-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FixturesService {
    private readonly monkUrl: string;
    private readonly tokenQuery: string;
    private readonly key: string;

    constructor(private readonly config: ConfigService, private http: HttpService) {
        this.monkUrl = this.config.get('sport-monks-config.monksUrl');
        this.tokenQuery = this.config.get('sport-monks-config.tokenQuery');
        this.key = this.config.get('sport-monks-config.key');
    }

    getByDateRangeForTeam(startdate: string, enddate: string, teamid: string): Observable<any> {

        let url: string = `${this.monkUrl} + 'fixtures/between/' + ${startdate} + '/' + ${enddate} + '/' + teamid + 
                            ${this.tokenQuery} + ${this.key} + '&include=localTeam,visitorTeam`;
        return this.http
        // .get(this.monkUrl  + '/teams/' + teamid + this.tokenQuery + this.key + '&include=squad,coach')
        
        .get(url)
        .pipe(map(res => res.data));

        // "https://soccer.sportmonks.com/api/v2.0/fixtures/between/2019-06-01/2020-06-01/13?api_token=&include=localTeam,visitorTeam"
    }
    
}
