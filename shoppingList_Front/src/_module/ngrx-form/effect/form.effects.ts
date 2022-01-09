//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
//#endregion

//#region Store
import * as fromStore from '../store';
import { ValidationFnsService } from '../service/validation-fns.service';
import { SetValueAction } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
import { ControlValidationFns } from '../model/validation-fns.model';
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
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormByID(action.formId))),
          map(([action, form]) => {

            let validationFns:ControlValidationFns = this.validationFnsService.getAllControlValidationFns();

            let ctrlId:string = action.formId+'.'+'ConfirmPassword';
                      

            return fromStore.validateFormAction({
              formId: action.formId,
              controlValidationFns: validationFns
            });
          })
        )
      )
    )
  );


  validateControlAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      map((action:SetValueAction<FormValue>) => {
        return fromStore.validateControlAction({
          controlId: action.controlId,
          ValidationFns: this.validationFnsService.getControlValidationFnsById(action.controlId)
        });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private validationFnsService: ValidationFnsService 
  ) { }
}
