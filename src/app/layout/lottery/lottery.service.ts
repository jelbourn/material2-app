import { Injectable } from '@angular/core';
import { SHttpService, Observable } from '../shared';

@Injectable()
export class LotteryService {
    constructor(private http: SHttpService) { }
}
