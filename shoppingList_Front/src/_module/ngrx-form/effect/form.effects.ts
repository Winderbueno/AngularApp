//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { MarkAsSubmittedAction } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '../store';
//#endregion


@Injectable()
export class FormEffects {

  // When form is submitted, according to form validity state
  // Dispatch corresponding user defined submit action 
  dispatchSubmitAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.formSubmitAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormByID(action.formID))),
          filter(([action, form]) => {
            return form != undefined
              && form.userDefinedProperties.submitValidAction != undefined
              && form.userDefinedProperties.submitInvalidAction != undefined;
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
