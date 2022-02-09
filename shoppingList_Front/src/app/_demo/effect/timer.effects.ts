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
      // TODO -> Faire selector form pour récup value du form
      withLatestFrom(this.store.select(fromForm.selectFormById('Alert'))),
      map(([, formState]) =>
        fromTimer.defineTimerAction({ timer : new Timer({
          name: 'Alert',
          time: (formState.controls.Delay.value as number)*1000
        }) })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
