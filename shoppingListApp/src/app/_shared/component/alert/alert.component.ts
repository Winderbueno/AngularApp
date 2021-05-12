﻿//#region Angular and RxJS Module
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
//#endregion

//#region Model and Service
import { Alert } from '@app_model/alert.model';
import { AlertTypeEnum } from '@app_model/enum/alert-type.enum';
import { AlertService } from '@app_service/error-management/alert.service';
//#endregion

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
  })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[] = [];
    alertSubscription!: Subscription;
    routeSubscription!: Subscription;

    constructor(
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit() {
        // Subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
                // Clear alerts when an empty alert is received
                if (!alert.message) {
                    // Filter out alerts without 'keepAfterRouteChange' flag
                    this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

                    // Remove 'keepAfterRouteChange' flag on the rest
                    this.alerts.forEach(x => delete x.keepAfterRouteChange);
                    return;
                }

                // Add alert to array
                this.alerts.push(alert);

                // Auto close alert if required
                if (alert.autoClose) {
                    setTimeout(() => this.removeAlert(alert), 3000);
                }
           });

        // Clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.alertService.clear(this.id);
            }
        });
    }

    ngOnDestroy() {
        // Unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    removeAlert(alert: Alert) {
        // Check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) return;

        if (this.fade) {
            // Fade out alert
            alert.fade = true;

            // Remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        } else {
            // Remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }

    cssClasses(alert: Alert) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];
                
        const AlertTypeEnumClass = {
            [AlertTypeEnum.Success]: 'alert alert-success',
            [AlertTypeEnum.Error]: 'alert alert-danger',
            [AlertTypeEnum.Info]: 'alert alert-info',
            [AlertTypeEnum.Warning]: 'alert alert-warning'
        }

        classes.push(AlertTypeEnumClass[alert.type]);

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }
}