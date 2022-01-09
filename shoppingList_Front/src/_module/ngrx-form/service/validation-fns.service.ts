//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { ControlValidationFns } from '../model/validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValidationFns:ControlValidationFns = {};

  getControlValidationFnsById(controlID: string): ValidationFn<any>[] {
    return this.controlValidationFns[controlID];
  }

  getAllControlValidationFns(): ControlValidationFns {
    return this.controlValidationFns;
  }

  setControlValidationFns(controlId: string, validationFns: ValidationFn<any>[]) {
    this.controlValidationFns[controlId]=validationFns;
  }

  addControlValidationFn(controlId: string, validationFn: ValidationFn<any>) {    
    if(this.controlValidationFns[controlId] != undefined) {
      this.controlValidationFns[controlId].push(validationFn);
    } else {
      this.controlValidationFns[controlId]=[validationFn];
    }
  }
}
