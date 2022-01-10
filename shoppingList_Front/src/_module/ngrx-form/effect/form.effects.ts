//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { ProjectFn, SetValueAction } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '../store';
import { FormValue } from '../store/form.state';
import { ValidationFnsService } from '@formNew/service/validation-fns.service';
import { ControlValidationFns } from '@formNew/model/validation-fns.model';
//#endregion


@Injectable()
export class FormEffects {

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


  validateFormAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.submitFormAction),
      switchMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store.select(fromStore.selectFormById(action.formId))),
          map(([action, form]) => {

            let controlValidationFns:ControlValidationFns = this.validationFnsService.getAllControlValidationFns();
            let formValidationFns:ProjectFn<any>[] = this.validationFnsService.getFormValidationFnsById(action.formId);
            
            // TODO
            // for(let a in controlValidationFns){
            //   controlValidationFns[a];
            //   a;
            // }

            return fromStore.validateFormAction({
              formId: action.formId,
              controlValidationFns: controlValidationFns,
              formValidationFns : formValidationFns
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
