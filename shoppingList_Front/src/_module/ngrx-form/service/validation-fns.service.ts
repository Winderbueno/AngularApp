//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { 
  ControlValidationFns, 
  StateParametrizedValidationFn, 
  StateParametrizedValidationFns } from '../model/validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValidationFns:ControlValidationFns = {};
  formDependantValidationFns:StateParametrizedValidationFns = {};

  getControlValidationFns(controlId: string): ValidationFn<any>[] {
    return this.controlValidationFns[controlId];
  }

  getStateParametrizedValidationFns(formId: string): StateParametrizedValidationFn[] {
    return this.formDependantValidationFns[formId];
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

  addStateParametrizedValidationFn(formId: string, validationFn: StateParametrizedValidationFn) {    
    if(this.formDependantValidationFns[formId] != undefined) {
      this.formDependantValidationFns[formId].push(validationFn);
    } else {
      this.formDependantValidationFns[formId]=[validationFn];
    }
  }
}
