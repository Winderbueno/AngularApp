﻿//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AlertSelector from '@alert_store/alert.selectors';
//#endregion

//#region App Component, Model
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
import { AlertTypeEnumClass } from '@app_alert/model/enum/alert-type.enum';
//#endregion


@Component({
    selector: 'app-alert',
    template: ``
})
export class AlertComponent implements OnInit {

    snackBarRef!: MatSnackBarRef<SnackbarComponent>;

    constructor(
        private store: Store,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {

      this.store.select(AlertSelector.getAlert).subscribe(alert => {

        // alert is defined, trigger snackBar
        if (alert != undefined) {
          if (alert.message) {
            this.openSnackBar(alert.message, AlertTypeEnumClass[alert.type]);
          }
        } else if (this.snackBarRef != null) {
          this.snackBarRef.dismiss();
        }
      });
    }

    openSnackBar(msg: string, panelClass: string) {
      this.snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
        data: msg,
        panelClass: panelClass,
        duration: 10000 // TODO - should be in app conf + Add an action when Alert fade
      });
    }
}
