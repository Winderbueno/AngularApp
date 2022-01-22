//#region Angular, Material, NgRx
import { Component } from '@angular/core';
//#endregion

//#region Module
import { FormComponent } from '@form/component';
import * as fromAlert from '@alert/store/';
import * as fromTimer from '@timer/store';
import * as fromLoader from '@loader/store';
import { Timer } from '@timer/model/timer.model';
//#endregion


@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html'
})
export class AlertDemoComponent extends FormComponent {  

  // Proposition values
  alertTypeEnumValues: string[] = Object.keys(fromAlert.AlertTypeEnum);

  ngOnInit(){
    // Form Configuration
    super.formId = "Alert";
    super.persist = true;
    super.ngOnInit();
  }

  triggerAlert() {
    this.store.dispatch(
      fromAlert.triggerAlertAction({
        alertType: this.value.Criticity as fromAlert.AlertTypeEnum,
        message: "A Great alert",
        keepAfterRouteChange: false
      })
    );
  }

  triggerDelayedAlert() {

    let alertAction = fromAlert.triggerAlertAction({
      alertType: this.value.Criticity as fromAlert.AlertTypeEnum,
      message: "A Wonderful Delayed alert",
      keepAfterRouteChange: false
    });

    let triggerDelayedAlertTimer: Timer = new Timer({
      name: 'TriggerDelayedAlert',
      time: 2000,
      action: alertAction
    });

    // TODO - Should not dispatch action sequentially
    this.store.dispatch(fromLoader.startLoaderAction({ triggerSource : '' }));
    
    this.store.dispatch(fromTimer.defineTimerAction({ timer : triggerDelayedAlertTimer }));

    this.store.dispatch(fromTimer.defineTimerAction({ 
      timer : new Timer({
        name: 'StopLoaderTimer',
        time: 3000,
        action: fromLoader.stopLoaderAction()
      }) 
    }));
  }  
}
