//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, switchMap, filter } from 'rxjs/operators';
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
  // Run static control validation
  validateControl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      map((action: SetValueAction<FormValue>) => {
        return fromStore.validateControlAction({
          controlId: action.controlId,
          ValidationFns: this.validationFnsService.getStaticControlValidationFns(
            action.controlId.split('.')[0],
            action.controlId.split('.')[1])
        });
      })
    )
  );

  // TODO - This is done for any value change... Might be optimizable
  // After control has been validated, 
  // Run validation on the entire form for potentially dependant control
  dynamycFormValidation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.validateControlAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.controlId.split('.')[0]))),
          map(([action, formState]) => {
            let formId:string = action.controlId.split('.')[0];
            return fromStore.dynamicValidateFormAction({
              formId: formId,
              // Get DynamicValidationFns for the form 
              controlValidationFns: this.validationFnsService 
                .getAppliedDynamicControlValidationFnsByFormId(formId, formState)
            });
          })
        )
      )
    )
  );

  // After form has been submitted, 
  // Run form validation (i.e. a validation of all its control)
  validateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore.submitFormAction,
        fromStore.clearFormValueAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.formId))),
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

  // After form has been validated, if form is valid, throw action
  formValidated$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore.validateFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.formId))),
          filter(([, formState]) => formState.isValid),
          map(([action,]) => {
            return fromStore.formValidatedAction({ formId: action.formId});
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
