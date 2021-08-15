//#region Angular & Material
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
import * as AlertActions from '@app_alert/_store/alert.actions';
import * as AlertSelector from '@app_alert/_store/alert.selectors';
//#endregion

//#region App Component, Model
import { SnackbarComponent } from '@app_alert/component/snackbar/snackbar.component';
import { Alert } from '@app_alert/model/alert.model';
import { AlertTypeEnum, AlertTypeEnumClass } from '@app_alert/model/enum/alert-type.enum';
import { AlertService } from '@app_alert/service/alert.service';
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
        protected store: Store,
        private alertService: AlertService,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {

      this.store.select(AlertSelector.getAlert).subscribe(alert => {

        // Save the alert for route change
        if(alert.keepAfterRouteChange) {
          this.alert = alert;
        }

        // If empty message, clear Alert
        if (!alert.message) {
          if (this.alert.id != '-1') { // If there is a save alert for route change, delete it
            this.alert.id = '-1';
          }
          else if (this.snackBarRef != undefined) { // Otherwise, close the alert
            this.snackBarRef.dismiss();
          }
          return;
        }

        this.openSnackBar(alert.message, AlertTypeEnumClass[alert.type]);

      });


      // Clear alerts on location change
      this.routeSubscription = this.router.events
        .subscribe(event => {
        if (event instanceof NavigationStart) {
            this.alertService.clear();
        }
      });
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
