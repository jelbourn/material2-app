import { MdDialogRef } from '@angular/material';
import { Component, Optional } from '@angular/core';

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p>
      <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button>
    </p>
  `,
})
export class HomeDialogContentComponent {
  constructor(@Optional() public dialogRef: MdDialogRef<HomeDialogContentComponent>) {
  }
}
