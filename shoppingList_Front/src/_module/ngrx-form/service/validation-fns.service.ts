//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { 
  ControlValidationFns, 
  StateParamControlValidationFn, 
  StateParamControlValidationFns } from '../model/validation-fns.model';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValFns:ControlValidationFns = {};
  stateParamControlValFns:StateParamControlValidationFns = {};

  getControlValidationFns(formId: string, controlName: string): ValidationFn<any>[] {
    return this.controlValFns[this.getControlIdWithName(formId, controlName)];
  }

  getControlValidationFnsByFormId(formId: string): ControlValidationFns {

    let formValFns:ControlValidationFns = {};
    for(let ctrlId in this.controlValFns){
      if(ctrlId.split('.')[0] === formId) {
        formValFns[ctrlId] = this.controlValFns[ctrlId];
      }
    }

    return formValFns;
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
  getStateParamControlValidationFnsByFormId(formId: string): StateParamControlValidationFns {

    let formStateParamValFns:StateParamControlValidationFns = {};
    for(let ctrlId in this.stateParamControlValFns){
      if(ctrlId.split('.')[0] === formId) {
        formStateParamValFns[ctrlId] = this.stateParamControlValFns[ctrlId];
      }
    }

    return formStateParamValFns;
  }

  addStateParamControlValidationFn(
    formId: string, 
    controlName: string,
    validationFn: StateParamControlValidationFn) {   
    
    let ctrlId:string = this.getControlIdWithName(formId, controlName);
    let ctrlStateParamValFns:StateParamControlValidationFn[] = this.stateParamControlValFns[ctrlId];

    ctrlStateParamValFns != undefined ? 
      this.stateParamControlValFns[ctrlId].push(validationFn) :
      this.stateParamControlValFns[ctrlId]=[validationFn];
  }

  private getControlIdWithName(formId: string, controlName: string) : string {
    return formId+'.'+controlName;
  }
}
