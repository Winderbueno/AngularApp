//#region NgRx
import { ValidationFn } from 'ngrx-forms';
//#endregion

export interface FormGroupValidationFns {
  [id: string]: ValidationFn<any>[];
}