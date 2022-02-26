//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';
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
      map((action) =>
        fromTimer.defineTimerAction({ timer : new Timer({
          timerId: 'Alert',
          time: (action.formValue.Delay as number)*1000
        }) })
      )
    )
  );

  constructor(private actions$: Actions) {}
}
