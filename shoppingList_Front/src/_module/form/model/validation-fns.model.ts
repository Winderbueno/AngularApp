//#region NgRx
import { FormGroupState, ValidationFn } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
//#endregion

export interface StaticControlValidationFns {
  [controlId: string]: ValidationFn<any>[];
}

export interface DynamicControlValidationFns {
  [controlId: string]: DynamicControlValidationFn[];
}

/* Validation Fns that depend on other state value */
export declare type DynamicControlValidationFn = 
  (s:FormGroupState<FormValue>) => ValidationFn<any> | undefined;