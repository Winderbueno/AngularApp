//#region NgRx
import { ProjectFn, ValidationFn } from 'ngrx-forms';
//#endregion

export interface ControlValidationFns {
  [id: string]: ValidationFn<any>[];
}

export interface FormValidationFns {
  [id: string]: ProjectFn<any>[];
}