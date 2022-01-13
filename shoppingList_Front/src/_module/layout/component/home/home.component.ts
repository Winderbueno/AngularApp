//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAlert from '@alert/store/';
import * as fromTimer from '@timer/store';
import * as fromLoader from '@loader/store';
import { Timer } from '@timer/model/timer.model';
//#endregion


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'shoppingList_Front';

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

  constructor(public store: Store) {}

  ngOnInit(): void {}

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
    this.store.dispatch(fromTimer.deleteTimerAction({ name : 'TriggerDelayedAlert' }));
    this.store.dispatch(fromTimer.deleteTimerAction({ name : 'StopLoaderTimer' }));
    this.store.dispatch(fromLoader.startLoaderAction({triggerSource : '' }));
    this.store.dispatch(fromTimer.defineTimerAction({ timer : this.triggerDelayedAlertTimer }));
    this.store.dispatch(fromTimer.defineTimerAction({ timer : this.stopLoaderTimer }));
  }

  startLoader() { this.store.dispatch(fromLoader.startLoaderAction({triggerSource : '' })); }

  stopLoader() { this.store.dispatch(fromLoader.stopLoaderAction()); }
}
