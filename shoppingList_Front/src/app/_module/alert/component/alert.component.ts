//#region Angular & Material
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AlertSelector from '@app_alert/_store/alert.selectors';
//#endregion

//#region App Component, Model
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
import { Alert } from '@app_alert/model/alert.model';
import { AlertTypeEnumClass } from '@app_alert/model/enum/alert-type.enum';
//#endregion


@Component({
    selector: 'app-alert',
    template: ``
})
export class AlertComponent implements OnInit, OnDestroy {

    snackBarRef!: MatSnackBarRef<SnackbarComponent>;
    alert: Alert = new Alert();
    alertSubscription!: Subscription;
    routeSubscription!: Subscription;

    constructor(
        private router: Router,
        private store: Store,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {

      this.store.select(AlertSelector.getAlert).subscribe(alert => {

        // alert is defined, trigger snack Bar
        if (alert != undefined) {
          if (alert.message) {
            this.openSnackBar(alert.message, AlertTypeEnumClass[alert.type]);
          }
        } else if (this.snackBarRef != null) {
          this.snackBarRef.dismiss();
        }
      });

      // TODO
      // Clear alerts on location change
      /*this.routeSubscription = this.router.events
        .subscribe(event => {
        if (event instanceof NavigationStart) {
            this.alertService.clear();
        }
      });*/
    }

    ngOnDestroy() {
        // Unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    openSnackBar(msg: string, panelClass: string) {
      this.snackBarRef = this.snackBar.openFromComponent(SnackbarComponent, {
        data: msg,
        panelClass: panelClass,
        duration: 10000
      });
    }
}
