import series from 'async/series';
import { asEnumerable as linq } from 'linq-es5';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeatureService } from './feature.service';
import { IdentityCard, RootObject, Plate } from '../shared/models';
import { Observable } from 'rxjs/Observable';
import { PinyinService } from '../shared/pinyin.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
    selector: 'app-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit, OnDestroy {

    searchText: string;
    searchTextStream: Subject<string> = new Subject<string>();
    private _data: RootObject[];
    identities: IdentityCard[];

    provinces: Display[];
    provinceSelected: any;

    provShortNames: Display[];
    provShortNameSelectd: string;
    plateAlphabets: Display[];
    plateAlphabetSelected: string;

    random = Math.ceil(Math.random() * 3927);

    constructor(private _featureService: FeatureService,
        private _pinyin: PinyinService) { }

    ngOnInit(): void {
        this._featureService.getData()
            .subscribe(data => {
                const index = this.random % data.length;
                this._data = [...data.slice(index), ...data.slice(0, index)];
                this.provinces = [{ value: 0, viewValue: '所有' },
                ...linq(data).Select(x => ({ value: x.code, viewValue: x.fullName })).ToArray()];
                this.provinceSelected = this._data[0].code;
                this.searchChanged(null);

                this.provShortNames = linq(data).Select(x => x.name).Select(x => ({ value: x, viewValue: x })).ToArray();
                this.provShortNameSelectd = this.provShortNames[this.random % this.provShortNames.length].viewValue;
                this.provShortNameChanged(null);
            });

        this.searchTextStream.debounceTime(128).distinctUntilChanged().subscribe(txt => this.search(txt));
    }

    ngOnDestroy(): void {
        this.searchTextStream.unsubscribe();
    }

    searchChanged($event): void {
        if ($event && $event.value != null) {
            this.search(this.searchText);
        } else {
            this.searchTextStream.next(this.searchText);
        }
    }

    private search(txt: string): void {
        series([
            callback => {
                const temp = linq(this._data).SelectMany(d => d.identityCards)
                    .Where(d => this.provinceSelected == null
                        || this.provinceSelected === 0
                        || Math.floor(this.provinceSelected / 10000) === Math.floor(d.code / 10000));

                const answer = (txt || '').length > 0
                    ? temp.Where(t =>
                        `${t.code} ${t.address} ${this._pinyin.pinyin(t.address)} ${this._pinyin.pinyinFull(t.address)}`
                            .toLowerCase().indexOf(txt) >= 0
                    ).ToArray()
                    : temp.ToArray();
                callback(null, answer);
            }],
            (err, results) => {
                this.identities = results[0];
            }
        );
    }

    provShortNameChanged($event): void {

        const lq = linq(this._data).Where(d => d.name === this.provShortNameSelectd);
        this.plateAlphabets = lq.SelectMany(d => d.plates)
            .Where(x => x.address != null)
            .Select(x => ({ value: `${lq.First().fullName} ${x.address || ''}`, viewValue: x.alphabet }))
            .ToArray();

        this.plateAlphabetSelected = this.plateAlphabets && this.plateAlphabets.length > 0
            ? this.plateAlphabets[this.random % this.plateAlphabets.length].value as string
            : '';

        console.log(this.plateAlphabetSelected);
    }

}

class Display {
    value: string | number;
    viewValue: string;
}
