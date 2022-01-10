//#region NgRx
import { FormGroupState, ProjectFn, ValidationFn } from 'ngrx-forms';
import { FormValue } from '../store/form.state';
//#endregion

export interface ControlValidationFns {
  [controlId: string]: ValidationFn<any>[];
}

export interface StateParametrizedValidationFns {
  [formId: string]: StateParametrizedValidationFn[];
}

export declare type StateParametrizedValidationFn = (s:FormGroupState<FormValue>) => ControlValidationFns;