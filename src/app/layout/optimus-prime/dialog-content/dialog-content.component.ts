import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog-content',
    templateUrl: './dialog-content.component.html',
    styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
    constructor( @Optional() public dialogRef: MdDialogRef<DialogContentComponent>) { }
}
