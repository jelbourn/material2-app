import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 's-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/optimus-prime']);
        }
    }
}
