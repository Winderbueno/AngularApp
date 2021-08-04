//#region Angular
import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
//#endregion


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public message: any
  ) { }

}
