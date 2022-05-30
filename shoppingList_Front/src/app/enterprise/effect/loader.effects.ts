//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromForm from '@form/store';
import * as fromLoader from '@loader/store';
import * as fromTimer from '@timer/store';
//#endregion


@Injectable()
export class LoaderEffects {

  // When AlertDemo form is submitted & valid, startLoader
  startLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Alert'),
      map(() => fromLoader.startLoaderAction({ triggerSource : '' }))
    )
  );

  // When AlertDemo timer End, stopLoader 
  stopLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTimer.timerEndedAction),
      filter((action) => action.timerId === 'Alert'),
      map(() => fromLoader.stopLoaderAction())
    )
  );

  constructor(
    private actions$: Actions,
  ) {}
}
