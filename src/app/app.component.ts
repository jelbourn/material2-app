import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    folders: Link[];
    constructor() { }

    ngOnInit() {
        this.folders = [];
        this.folders.push({ icon: 'account_balance', name: 'optimus-prime', value: '/optimus-prime' });
        this.folders.push({ icon: 'face', name: 'feature', value: '/feature' });
        this.folders.push({ icon: 'local_atm', name: 'lottery', value: '/lottery' });
    }
}

class Link {
    icon: string;
    name: string;
    value: string;
}
