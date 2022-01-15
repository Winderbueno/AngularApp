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

  getControlValidationFns(
    formId: string,
    controlName: string,
    form: FormGroupState<FormValue>): ValidationFn<any>[] {

    let controlValFns: ValidationFn<any>[] = this.getStaticControlValidationFns(formId, controlName);
    let controlStateParamValFns: StateParamControlValidationFn[] =
      this.getStateParamControlValidationFns(formId, controlName);

    var genCtrlValFns: ValidationFn<any>[] = [];
    if(controlValFns != undefined) 
      controlValFns.forEach(elt => { genCtrlValFns.push(elt); });
    
    if(controlStateParamValFns != undefined)
      controlStateParamValFns.forEach(elt => { genCtrlValFns.push(elt(form)); });

    return genCtrlValFns;
  }

  getControlValidationFnsByFormId(
    formId: string, 
    form: FormGroupState<FormValue>): StaticControlValidationFns {

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

  getDynamicControlValidationFnsByFormId(
    formId: string, 
    form: FormGroupState<FormValue>): StaticControlValidationFns {

    let controlStateParamValFns: StateParamControlValidationFns =
      this.getStateParamControlValidationFnsByFormId(formId);

    var genCtrlValFns: StaticControlValidationFns = {};
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

  /*********************************/
  /* Static Control Validation Fns */
  /*********************************/

  private getStaticControlValidationFns(formId: string, controlName: string): ValidationFn<any>[] {
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

  /***************************************************/
  /* State Parametrized Control Validation Functions */
  /***************************************************/

  private getStateParamControlValidationFns(formId: string, controlName: string): StateParamControlValidationFn[] {
    return this.stateParamControlValFns[this.getControlIdWithName(formId, controlName)];
  }

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
    stateParamValFns: StateParamControlValidationFn[]) {   
    
    // If user did not give validationFns
    if(stateParamValFns.length === 0) { return; }

    let ctrlId:string = this.getControlIdWithName(formId, controlName);
    let ctrlStateParamValFns:StateParamControlValidationFn[] = this.stateParamControlValFns[ctrlId];
    
    // Save ValidationFns
    if (ctrlStateParamValFns != undefined) {
      stateParamValFns.forEach(valFn => {
        this.stateParamControlValFns[ctrlId].push(valFn)
      });
    } else { this.stateParamControlValFns[ctrlId] = stateParamValFns; }
  }

  private getControlIdWithName(formId: string, controlName: string) : string {
    return formId+'.'+controlName;
  }
}
