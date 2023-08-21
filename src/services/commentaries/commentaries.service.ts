import { Injectable, HttpService } from '@nestjs/common';

import { ConfigService } from 'nestjs-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CommentariesService {
    private readonly monkUrl: string;
    private readonly tokenQuery: string;
    private readonly key: string;

    constructor(private readonly config: ConfigService, private http: HttpService) {
        this.monkUrl = this.config.get('sport-monks-config.monksUrl');
        this.tokenQuery = this.config.get('sport-monks-config.tokenQuery');
        this.key = this.config.get('sport-monks-config.key');
    }

    getById(id: string): Observable<any> {
        return this.http
        .get(this.monkUrl + 'commentaries/fixture' + id + this.tokenQuery + this.key)
        .pipe(map(res => res.data));
    }
}
