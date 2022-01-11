//#region NgRx
import { FormGroupState, ValidationFn } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
//#endregion

export interface ControlValidationFns {
  [controlId: string]: ValidationFn<any>[];
}

export interface ControlStateParamValidationFns {
  [controlId: string]: StateParamValidationFn[];
}

/* Validation Fns that depend on other state value */
export declare type StateParamValidationFn = (s:FormGroupState<FormValue>) => ValidationFn<any>;