//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromForm from '@form/store';
import * as fromTimer from '@timer/store';
import { Timer } from '@timer/model/timer.model';
//#endregion


@Injectable()
export class TimerEffects {

  // When Alert Demo form is submitted & valid, startTimer
  startTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Alert'),
      withLatestFrom(this.store.select(fromForm.selectFormById('Alert'))),
      //filter(([, form]) => form.controls.Timer.value !== 0),
      map(() =>
        fromTimer.defineTimerAction({ timer : new Timer({
          name: 'Alert',
          time: 2000 // TODO get time from form
        }) })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
