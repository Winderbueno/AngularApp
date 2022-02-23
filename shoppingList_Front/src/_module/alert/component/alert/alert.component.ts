//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
//#endregion

//#region Store, Component, Model
import * as fromStore from '../../store/';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AlertTypeEnumClass } from '../../model/alert-type.enum';
//#endregion


@Component({
    selector: 'k-alert',
    template: ``
})
export class AlertComponent implements OnInit {

    snackBarRef!: MatSnackBarRef<SnackbarComponent>;

    constructor(
        private store: Store,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {

      this.store.select(fromStore.selectCurrentAlert).subscribe(alert => {

        // If alert is defined, trigger snackBar
        if (alert != undefined) {
            this.openSnackBar(alert.message, AlertTypeEnumClass[alert.type]);
        } else if (this.snackBarRef != null) {
          this.snackBarRef.dismiss();
        }
      });
    }

    openSnackBar(msg: string, panelClass: string) {
      this.snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
        data: msg,
        panelClass: panelClass
      });
    }
}
