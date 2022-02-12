//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, filter } from 'rxjs/operators';
//#endregion

//#region Action
import * as fromForm from '@form/store';
//#endregion


@Injectable()
export class FormEffects {

  resetForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.clickedOnButtonAction),
      filter((action) => action.buttonId === 'Reset Form'),
      map(() => fromForm.resetFormAction({ formId:'Form' }))
    )
  );

  clearFormValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromForm.clickedOnButtonAction),
      filter((action) => action.buttonId === 'Clear Form Value'),
      map(() => fromForm.clearFormValueAction({ formId:'Form' }))
    )
  );

  constructor(private actions$: Actions) {}
}
