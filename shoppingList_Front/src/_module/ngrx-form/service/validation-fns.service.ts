//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ProjectFn, ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { ControlValidationFns, FormValidationFns } from '../model/validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValidationFns:ControlValidationFns = {};
  formValidationFns:FormValidationFns = {};

  getControlValidationFnsById(controlId: string): ValidationFn<any>[] {
    return this.controlValidationFns[controlId];
  }

  getFormValidationFnsById(formId: string): ProjectFn<any>[] {
    return this.formValidationFns[formId];
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

  addFormValidationFn(formId: string, validationFn: ProjectFn<any>) {    
    if(this.formValidationFns[formId] != undefined) {
      this.formValidationFns[formId].push(validationFn);
    } else {
      this.formValidationFns[formId]=[validationFn];
    }
  }
}
