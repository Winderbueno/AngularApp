//#region Angular, Material, NgRx
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
//#endregion

//#region Store
import * as fromStore from '../../store/';
//#endregion


@Component({ templateUrl: './snackbar.component.html' })
export class SnackbarComponent {
  dismissAlertAction = fromStore.dismissAlertAction();
  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: any) {}
}
