//#region NgRx
import { FormGroupState, ValidationFn } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
//#endregion

export interface StaticControlValidationFns {
  [controlId: string]: ValidationFn<any>[];
}

export interface StateParamControlValidationFns {
  [controlId: string]: StateParamControlValidationFn[];
}

/* Validation Fns that depend on other state value */
export declare type StateParamControlValidationFn = 
  (s:FormGroupState<FormValue>) => ValidationFn<any> | undefined;