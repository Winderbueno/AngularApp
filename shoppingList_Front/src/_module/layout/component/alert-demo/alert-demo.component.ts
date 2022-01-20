//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region Module
import { FormComponent } from '@form/component/form.component';
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

  triggerDelayedAlertTimer:Timer = new Timer({
    name: 'TriggerDelayedAlert',
    time: 3000,
    action: fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Success,
      message: "A Wonderful Delayed alert",
      keepAfterRouteChange: false
    })
  });

  stopLoaderTimer:Timer = new Timer({
    name: 'StopLoaderTimer',
    time: 3000,
    action: fromLoader.stopLoaderAction()
  }); 

  ngOnInit(){    
    // Form Configuration
    super.title = "Alert Demo";
    super.persist = true;
    super.ngOnInit();
  }

  submitValidAction(): TypedAction<string> {
    return fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Success,
      message: "Valid Form Submitted !",
      keepAfterRouteChange: false
    });
  }

  triggerAlert() {
    this.store.dispatch(
      fromAlert.triggerAlertAction({
        alertType: fromAlert.AlertTypeEnum.Error,
        message: "A Great alert",
        keepAfterRouteChange: false
      })
    );
  }

  triggerDelayedAlert() {
    this.store.dispatch(fromLoader.startLoaderAction({triggerSource : '' }));
    this.store.dispatch(fromTimer.defineTimerAction({ timer : this.triggerDelayedAlertTimer }));
    this.store.dispatch(fromTimer.defineTimerAction({ timer : this.stopLoaderTimer }));
  }
}
