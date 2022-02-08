//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromAlert from '@alert/store';
import * as fromForm from '@form/store';
import * as fromTimer from '@timer/store';
//#endregion


@Injectable()
export class AlertEffects {

  triggerAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Form'),
      withLatestFrom(this.store.select(fromForm.selectFormById('Form'))),
      map(() =>
        fromAlert.triggerAlertAction({
          alertType: fromAlert.AlertTypeEnum.Success,
          message: "Valid Form Submitted !",
          keepAfterRouteChange: false
        })
      )
    )
  );

  alertDemoTriggerAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTimer.timerEndedAction),
      filter((action) => action.name === 'Alert'),
      withLatestFrom(this.store.select(fromForm.selectFormById('Alert'))),
      map(([,alertForm]) =>
        fromAlert.triggerAlertAction({
          alertType: alertForm.controls.Criticity.value as fromAlert.AlertTypeEnum,
          message: alertForm.controls.Message.value as string,
          keepAfterRouteChange: false
        })
      )
    )
  );



  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
