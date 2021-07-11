//#region Angular, Material, RxJS
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
//#endregion

//#region App Component, Model, Service
import { Alert } from '@app_alert/model/alert.model';
import { AlertService } from '@app_alert/service/alert.service';
import { AlertTypeEnum } from '@app_alert/model/enum/alert-type.enum';
//#endregion

import {SnackbarComponent} from '../snackbar/snackbar.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
  })
export class AlertComponent implements OnInit, OnDestroy {

    snackBarRef!: MatSnackBarRef<SnackbarComponent>;
    alert: Alert = new Alert();
    alertSubscription!: Subscription;
    routeSubscription!: Subscription;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {

      // Subscribe to new alert notifications
      this.alertSubscription = this.alertService.onAlert()
        .subscribe(alert => {

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

          const AlertTypeEnumClass = {
            [AlertTypeEnum.Success]: 'alert-success',
            [AlertTypeEnum.Error]: 'alert-danger',
            [AlertTypeEnum.Info]: 'alert-info',
            [AlertTypeEnum.Warning]: 'alert-warning'
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
