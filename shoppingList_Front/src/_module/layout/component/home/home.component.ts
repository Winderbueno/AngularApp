//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromAlert from '@alert/store/';
import * as fromTimer from '@timer/store';
import { Timer } from '@timer/model/timer.model';
//#endregion


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'shoppingList_Front';
  alertAction = fromAlert.triggerAlertAction;
  newTimer:Timer = new Timer({
    name: 'Bonjour',
    time: 5000, // TODO - Put this in a config file
    action: fromAlert.triggerAlertAction({
      alertType: fromAlert.AlertTypeEnum.Success,
      message: "A Wonderful Delayed alert",
      keepAfterRouteChange: false
    })
  });
  timerAction = fromTimer.defineTimerAction({timer:this.newTimer});
    

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
    this.store.dispatch(fromTimer.deleteTimerAction({ name : 'Bonjour' }));
    this.store.dispatch(fromTimer.defineTimerAction(this.timerAction));
  }

}
