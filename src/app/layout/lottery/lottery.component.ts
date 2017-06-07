import { Component, OnDestroy, OnInit } from '@angular/core';
import { IdentityCard, Plate, RootObject, PinyinService, Lottery, linq } from '../shared';
import { LotteryService } from './lottery.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector: 's-lottery',
    templateUrl: './lottery.component.html',
    styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit, OnDestroy {

    private lotteries: Lottery[];
    lotteriesFiltered: Lottery[];
    types = [
        { value: 0, viewValue: '所有' },
        { value: 1, viewValue: '福彩' },
        { value: 2, viewValue: '体彩' }
    ];
    typeSelected: number;

    constructor(private _lotteryService: LotteryService) { }

    ngOnInit() {
        this.lotteries = linq().Range(1, 50).Select(index => ({
            id: index.toString(),
            name: '好运10倍',
            retrieve: 'hysb',
            qty: 50,
            price: 10,
            type: parseInt(index.toString(), 10) % 2 === 0 ? '福彩' : '体彩'
        } as Lottery)).ToArray();
        this.lotteriesFiltered = this.lotteries;
    }

    typeChanged() {
        switch (this.typeSelected) {
            case 0:
                this.lotteriesFiltered = this.lotteries;
                break;
            case 1:
                this.lotteriesFiltered = this.lotteries.filter(l => l.type === '福彩');
                break;
            case 2:
                this.lotteriesFiltered = this.lotteries.filter(l => l.type === '体彩');
                break;
        }
    }

    stock() { }

    sell() { }

    ngOnDestroy() {
    }

}
