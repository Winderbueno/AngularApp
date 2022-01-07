//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { FormGroupValidationFns } from '../model/form-validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class FormGroupValidationFnsService {

  validationFns:FormGroupValidationFns = {};

  getControlValidationFns(controlID: string): ValidationFn<any>[] {
    return this.validationFns[controlID];
  }

  getFormValidationFns(formGroupID: string): FormGroupValidationFns {
    // TODO
    return this.validationFns;
  }

  setValidationFns(formGroupID: string, validationFns: ValidationFn<any>[]) {
    this.validationFns[formGroupID]=validationFns;
  }
}
