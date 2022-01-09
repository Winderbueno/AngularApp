//#region NgRx
import { ValidationFn } from 'ngrx-forms';
//#endregion

export interface ControlValidationFns {
  [id: string]: ValidationFn<any>[];
}