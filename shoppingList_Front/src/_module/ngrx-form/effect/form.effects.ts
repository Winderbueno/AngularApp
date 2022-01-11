//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { SetValueAction } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '../store';
import { FormValue } from '../store/form.state';
import { ValidationFnsService } from '../service/validation-fns.service';
import { 
  ControlStateParamValidationFns,
  ControlValidationFns } from '@formNew/model/validation-fns.model';
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

            let controlValFns:ControlValidationFns = 
              this.validationFnsService.getControlValidationFnsByFormId(action.formId);
            let controlStateParamValFns:ControlStateParamValidationFns = 
              this.validationFnsService.getStateParamControlValidationFnsByFormId(action.formId);

            var genCtrlValFns:ControlValidationFns = {};

            for(let ctrlId in controlValFns){
              controlValFns[ctrlId].forEach(elt=> {
                if(genCtrlValFns[ctrlId] === undefined){
                  genCtrlValFns[ctrlId]=[];
                }
                genCtrlValFns[ctrlId].push(elt);
              });
            }

            for (let ctrlId in controlStateParamValFns) {
              controlStateParamValFns[ctrlId].forEach(elt => {
                if (genCtrlValFns[ctrlId] === undefined) {
                  genCtrlValFns[ctrlId] = [];
                }
                // Transform StateParamValFn en ValFn
                genCtrlValFns[ctrlId].push(elt(form)); 
              });
            }            

            return fromStore.validateFormAction({
              formId: action.formId,
              controlValidationFns: genCtrlValFns,
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
          ValidationFns: this.validationFnsService.getControlValidationFns(
            action.controlId.split('.')[0],
            action.controlId.split('.')[1])
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
