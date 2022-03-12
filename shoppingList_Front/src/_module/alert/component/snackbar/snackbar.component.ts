//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
//#endregion

//#region Store
import * as fromStore from '../../store/';
//#endregion


@Component({ templateUrl: './snackbar.component.html' })
export class SnackbarComponent {

  constructor(
    private store: Store,
    @Inject(MAT_SNACK_BAR_DATA) public message: any
  ) {}

  dismissAlert() { 
    this.store.dispatch(fromStore.dismissAlertAction()); 
  }
}
