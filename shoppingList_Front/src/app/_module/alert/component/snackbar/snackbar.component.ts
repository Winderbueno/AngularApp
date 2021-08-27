//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AlertActions from '@alert_store/alert.actions';
//#endregion


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent {

  constructor(
    private store: Store,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public message: any
  ) { }

  dismissAlert() {
    this.snackBarRef.dismiss();
    this.store.dispatch(AlertActions.dismissAlert());
  }

}
