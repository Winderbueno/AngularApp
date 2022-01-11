//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { SetValueAction } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '../store';
import { FormValue } from '../store/form.state';
import { ValidationFnsService } from '../service/validation-fns.service';
//#endregion


@Injectable()
export class ValidationEffects {

  // After form control had its value set, 
  // Run control validation
  validateControlAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      switchMap((action:SetValueAction<FormValue>) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormById(action.controlId.split('.')[0]))),
          map(([action, formState]) => {
            return fromStore.validateControlAction({
              controlId: action.controlId,
              ValidationFns: this.validationFnsService.getControlValidationFns(
                action.controlId.split('.')[0],
                action.controlId.split('.')[1],
                formState)
            });
          })
        )
      )
    )
  );

  // TODO - This is done any change change on value... Might be optimizable
  // After form control has been, 
  // Run validation on potentially dependant
  dynamycFormValidationAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.validateControlAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormById(action.controlId.split('.')[0]))),
          map(([action, formState]) => {
            let formId:string = action.controlId.split('.')[0];
            return fromStore.dynamicValidateFormAction({
              formId: formId,
              // Get DynamicValidationFns for the form 
              controlValidationFns: this.validationFnsService 
                .getDynamicControlValidationFnsByFormId(formId, formState)
            });
          })
        )
      )
    )
  );

  // After form as been submitted, 
  // Run form validation (i.e. a validation of all its control)
  validateFormAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.submitFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormById(action.formId))),
          map(([action, formState]) => {
            return fromStore.validateFormAction({
              formId: action.formId,
              // Get All Control ValidationFns for the form 
              controlValidationFns: this.validationFnsService 
                .getControlValidationFnsByFormId(action.formId, formState)
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private validationFnsService: ValidationFnsService 
  ) { }
}
