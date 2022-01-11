//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormGroupState, ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { 
  StaticControlValidationFns, 
  StateParamControlValidationFn, 
  StateParamControlValidationFns } from '../model/validation-fns.model';
import { FormValue } from '../store/form.state';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValFns:StaticControlValidationFns = {};
  stateParamControlValFns:StateParamControlValidationFns = {};

  getControlValidationFnsByFormId(formId: string, form: FormGroupState<FormValue>): StaticControlValidationFns {

    let controlValFns: StaticControlValidationFns =
      this.getStaticControlValidationFnsByFormId(formId);
    let controlStateParamValFns: StateParamControlValidationFns =
      this.getStateParamControlValidationFnsByFormId(formId);

    var genCtrlValFns: StaticControlValidationFns = {};

    for (let ctrlId in controlValFns) {
      controlValFns[ctrlId].forEach(elt => {
        if (genCtrlValFns[ctrlId] === undefined) {
          genCtrlValFns[ctrlId] = [];
        }
        genCtrlValFns[ctrlId].push(elt);
      });
    }

    for (let ctrlId in controlStateParamValFns) {
      controlStateParamValFns[ctrlId].forEach(elt => {
        if (genCtrlValFns[ctrlId] === undefined) {
          genCtrlValFns[ctrlId] = [];
        }
        //Transform StateParamValFn en ValFn
        genCtrlValFns[ctrlId].push(elt(form));
      });
    }

    return genCtrlValFns;
  }


  /* Static Control Validation Fns */

  getControlValidationFns(formId: string, controlName: string): ValidationFn<any>[] {
    return this.controlValFns[this.getControlIdWithName(formId, controlName)];
  }

  private getStaticControlValidationFnsByFormId(formId: string): StaticControlValidationFns {

    let formValFns:StaticControlValidationFns = {};
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
  private getStateParamControlValidationFnsByFormId(formId: string): StateParamControlValidationFns {

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
