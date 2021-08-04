//#region Angular, Material, RxJS
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { Alert } from '@app_alert/model/alert.model';
import { AlertTypeEnum } from '@app_alert/model/enum/alert-type.enum';
//#endregion


@Injectable({ providedIn: 'root' })
export class AlertService {
    private _alertSubject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // Enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
        return this._alertSubject.asObservable().pipe(filter(x => x && x.id === id));
    }

    // Convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertTypeEnum.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertTypeEnum.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertTypeEnum.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertTypeEnum.Warning, message }));
    }

    // Core alert method
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this._alertSubject.next(alert);
    }

    // Clear alerts
    clear(id = this.defaultId) {
        this._alertSubject.next(new Alert({ id }));
    }
}
