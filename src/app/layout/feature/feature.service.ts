import { Http, Response } from '@angular/http';
import { IdentityCard, RootObject } from '../shared/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeatureService {

    private _dataUrl = 'mock-data/mock.txt';

    constructor(private http: Http) { }

    getData(): Observable<RootObject[]> {
        return this.http.get(this._dataUrl).map((res: Response) => res.json())
    }
}
