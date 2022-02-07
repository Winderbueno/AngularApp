//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromForm from '@form/store';
import * as fromAlert from '@alert/store';
//#endregion


@Injectable()
export class AlertEffects {

  triggerAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.formValidatedAction),
      filter((action) => action.formId === 'Form'),
      withLatestFrom(this.store.select(fromForm.selectFormById('Form'))),
      map((action) =>
        fromAlert.triggerAlertAction({
          alertType: fromAlert.AlertTypeEnum.Success,
          message: "Valid Form Submitted !",
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
