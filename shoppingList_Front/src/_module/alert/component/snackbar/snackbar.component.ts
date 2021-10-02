//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
//#endregion

//#region Store
import * as fromStore from '../../store/';
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
    this.store.dispatch(fromStore.dismissAlertAction());
  }

}
