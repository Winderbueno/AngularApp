//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { 
  ControlValidationFns, 
  StateParamValidationFn, 
  ControlStateParamValidationFns } from '../model/validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValFns:ControlValidationFns = {};
  controlStateParamValFns:ControlStateParamValidationFns = {};

  getControlValidationFns(formId: string, controlName: string): ValidationFn<any>[] {
    return this.controlValFns[this.getControlIdWithName(formId, controlName)];
  }

  getControlValidationFnsByFormId(formId: string): ControlValidationFns {
    return this.controlValFns;
  }

  setControlValidationFns(
    formId: string,
    controlName: string, 
    validationFns: ValidationFn<any>[]) {
    this.controlValFns[this.getControlIdWithName(formId, controlName)]=validationFns;
  }

  addControlValidationFn(
    formId: string,
    controlName: string,
    validationFn: ValidationFn<any>) {    
      
    let ctrlValFns:ValidationFn<any>[] = this.controlValFns[this.getControlIdWithName(formId, controlName)];

    ctrlValFns != undefined ? 
      ctrlValFns.push(validationFn) :
      ctrlValFns=[validationFn];
  }

  /* State Parametrized Validation Functions */
  getStateParamControlValidationFnsByFormId(formId: string): ControlStateParamValidationFns {

    let formStateParamValFns:ControlStateParamValidationFns = {};

    for(let ctrlId in this.controlStateParamValFns){
      if(ctrlId.split('.')[0] === formId) {
        formStateParamValFns[ctrlId] = this.controlStateParamValFns[ctrlId];
      }
    }

    return formStateParamValFns;
  }

  addStateParamControlValidationFn(
    formId: string, 
    controlName: string,
    validationFn: StateParamValidationFn) {   
    
    let ctrlId:string = this.getControlIdWithName(formId, controlName);
    let ctrlStateParamValFns:StateParamValidationFn[] = this.controlStateParamValFns[ctrlId];

    ctrlStateParamValFns != undefined ? 
      this.controlStateParamValFns[ctrlId].push(validationFn) :
      this.controlStateParamValFns[ctrlId]=[validationFn];
  }

  private getControlIdWithName(formId: string, controlName: string) : string {
    return formId+'.'+controlName;
  }
}
