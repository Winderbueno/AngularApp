//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { FormGroupState, ValidationFn } from 'ngrx-forms';
//#endregion

//#region Model
import { 
  StaticControlValidationFns, 
  DynamicControlValidationFn, 
  DynamicControlValidationFns } from '../model/validation-fns.model';
import { FormValue } from '../store/form.state';
//#endregion


@Injectable({ providedIn: 'root' })
export class ValidationFnsService {

  controlValFns:StaticControlValidationFns = {};
  dynamicControlValFns:DynamicControlValidationFns = {};

  // Get All ControlValidationFns (Static & Dynamic) for a Form 
  getControlValidationFnsByFormId(
    formId: string, 
    form: FormGroupState<FormValue>): StaticControlValidationFns {

    let staticCtrlValFns: StaticControlValidationFns =
      this.getStaticControlValidationFnsByFormId(formId);
    let dynamicCtrllValFns: DynamicControlValidationFns =
      this.getDynamicControlValidationFnsByFormId(formId);

    var genCtrlValFns: StaticControlValidationFns = {};

    for (let ctrlId in staticCtrlValFns) {
      staticCtrlValFns[ctrlId].forEach(elt => {
        if (genCtrlValFns[ctrlId] === undefined) {
          genCtrlValFns[ctrlId] = [];
        }
        genCtrlValFns[ctrlId].push(elt);
      });
    }

    for (let ctrlId in dynamicCtrllValFns) {
      dynamicCtrllValFns[ctrlId].forEach(elt => {
        if (genCtrlValFns[ctrlId] === undefined) {
          genCtrlValFns[ctrlId] = [];
        }
        // Apply DynamicValFn with State
        let valFn = elt(form);
        if(valFn!=undefined) genCtrlValFns[ctrlId].push(valFn);        
      });
    }

    return genCtrlValFns;
  }

  getAppliedDynamicControlValidationFnsByFormId(
    formId: string, 
    form: FormGroupState<FormValue>): StaticControlValidationFns {

    let dynamicCtrlValFns: DynamicControlValidationFns =
      this.getDynamicControlValidationFnsByFormId(formId);

    var genCtrlValFns: StaticControlValidationFns = {};
    for (let ctrlId in dynamicCtrlValFns) {
      dynamicCtrlValFns[ctrlId].forEach(elt => {
        if (genCtrlValFns[ctrlId] === undefined) {
          genCtrlValFns[ctrlId] = [];
        }
        // Apply DynamicValFn with State
        let valFn = elt(form);
        if(valFn != undefined) genCtrlValFns[ctrlId].push(valFn);
      });
    }

    return genCtrlValFns;
  }

  /*********************************/
  /* Static Control Validation Fns */
  /*********************************/

  getStaticControlValidationFns(formId: string, controlName: string): ValidationFn<any>[] {
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

  private getDynamicControlValidationFnsByFormId(formId: string): DynamicControlValidationFns {

    let dynamicFormValFns:DynamicControlValidationFns = {};
    for(let ctrlId in this.dynamicControlValFns){
      if(ctrlId.split('.')[0] === formId) {
        dynamicFormValFns[ctrlId] = this.dynamicControlValFns[ctrlId];
      }
    }
    return dynamicFormValFns;
  }

  addDynamicControlValidationFns(
    formId: string, 
    controlName: string,
    dynamicValFns: DynamicControlValidationFn[]) {   
    
    // If user did not give validationFns
    if(dynamicValFns.length === 0) { return; }

    let ctrlId:string = this.getControlIdWithName(formId, controlName);
    let savedDynamicCtrlValFns:DynamicControlValidationFn[] = this.dynamicControlValFns[ctrlId];
    
    // Save ValidationFns
    if (savedDynamicCtrlValFns != undefined) {
      dynamicValFns.forEach(valFn => {
        this.dynamicControlValFns[ctrlId].push(valFn)
      });
    } else { this.dynamicControlValFns[ctrlId] = dynamicValFns; }
  }

  private getControlIdWithName(formId: string, controlName: string) : string {
    return formId+'.'+controlName;
  }
}
