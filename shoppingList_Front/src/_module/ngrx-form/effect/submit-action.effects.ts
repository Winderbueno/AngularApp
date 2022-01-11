//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromStore from '../store';
//#endregion


@Injectable()
export class SubmitActionEffects {

  // After form has been validated and according to its validity state
  // If exists, dispatch corresponding user defined submit action
  dispatchUserDefinedSubmitAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.validateFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormById(action.formId))),
          filter(([action, form]) => {
            return form != undefined
              && (form.userDefinedProperties.submitValidAction != undefined
              || form.userDefinedProperties.submitInvalidAction != undefined);
          }),
          map(([action, form]) => {
            if(form.isValid) return form.userDefinedProperties.submitValidAction;
            else return form.userDefinedProperties.submitInvalidAction;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
