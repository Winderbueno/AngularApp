//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, switchMap, filter } from 'rxjs/operators';
import { SetValueAction } from 'ngrx-forms';
//#endregion

//#region This
import * as fromStore from '../store';
import { FormValue } from '../model/form-value.model';
import { ValidationFnsService } from '../service/validation-fns.service';
//#endregion


@Injectable()
export class FormValidationEffects {

  // When value is set on control, call service to get control StaticValidationFns
  getControlStaticValidationFns$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      switchMap((action: SetValueAction<FormValue>) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormConf_Validate(action.controlId.split('.')[0]))),
          filter(([, validate]) => validate === true),
          map(([action, ]) => {
            return fromStore.validateControlAction({
              controlId: action.controlId,
              validationFns: this.validationFnsService.getStaticControlValidationFns(
                action.controlId.split('.')[0],
                action.controlId.split('.')[1])
            });
          })
        )
      )
    )
  );

  // TODO - This is done for any value change... Might be optimizable
  // When control has been validated, 
  // Run validation on the entire form for potentially dependant control
  dynamicFormValidation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.validateControlAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.controlId.split('.')[0]))),
          map(([action, formState]) => {
            let formId:string = action.controlId.split('.')[0];
            return fromStore.dynamicValidateFormAction({
              formId: formId,
              // Get ControlDynamicValidationFns for the form 
              controlValidationFns: this.validationFnsService 
                .getAppliedDynamicControlValidationFnsByFormId(formId, formState)
            });
          })
        )
      )
    )
  );

  // When form is submitted, 
  // Run form validation (i.e. a validation of all its control)
  validateForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore.submitFormAction,
        fromStore.clearFormValueAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.formId))),
          withLatestFrom(this.store.select(fromStore.selectFormConf_Validate(action.formId))),
          filter(([, validate]) => validate === true),
          map(([[action, formState],]) => {
            return fromStore.validateFormAction({
              formId: action.formId,
              // Get All ControlValidationFns for the form 
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
      ofType(fromStore.validateFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectForm(action.formId))),
          filter(([, formState]) => formState.isValid),
          map(([action, formState]) => {
            return fromStore.formValidatedAction({ 
              formId: action.formId,
              formValue: formState.value
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
