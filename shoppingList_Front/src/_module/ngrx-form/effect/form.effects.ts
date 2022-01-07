//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromStore from '../store';
import { FormGroupValidationFnsService } from '../service/form-validation.service';
import { SetValueAction } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
//#endregion


@Injectable()
export class FormEffects {

  // After form has been validated and according to its validity state
  // Dispatch corresponding user defined submit action
  dispatchSubmitAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.validateFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormByID(action.formId))),
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


  validateFormAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.submitFormAction),
      map((action) => {
        return fromStore.validateFormAction({
          formId: action.formId,
          formGroupValidationFns: this.formValidationFnsService.getFormValidationFns(action.formId)
        });
      })
    )
  );


  validateControlAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      map((action:SetValueAction<FormValue>) => {
        return fromStore.validateControlAction({
          controlId: action.controlId,
          ValidationFns: this.formValidationFnsService.getControlValidationFns(action.controlId)
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private formValidationFnsService: FormGroupValidationFnsService 
  ) { }
}
