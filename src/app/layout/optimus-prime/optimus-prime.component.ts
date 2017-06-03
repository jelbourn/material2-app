import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OptimusPrimeService } from './optimus-prime.service';

@Component({
    selector: 'app-optimus-prime',
    templateUrl: './optimus-prime.component.html',
    styleUrls: ['./optimus-prime.component.css']
})
export class OptimusPrimeComponent {
    lastDialogResult: string;
    progress = 0;
    foods: any[] = [
        { name: 'Pizza', rating: 'Excellent' },
        { name: 'Burritos', rating: 'Great' },
        { name: 'French fries', rating: 'Pretty good' },
    ];

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    openDialog() {
        const dialogRef = this._dialog.open(DialogContentComponent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        });
    }

    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }
}
