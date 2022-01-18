//#region Angular, Material, NgRx
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import * as fromStore from '@form/store/';
import { FormValue } from '@form/store/form.state';
import { FormErrorService } from '@form/service/form-error.service';
import { ValidationFnsService } from '@form/service/validation-fns.service';
import { DynamicControlValidationFn } from '@form/model/validation-fns.model';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 * 
 *  - FormControlState
 *    > Represent the state of the field (valid, dirty, touch...)
 *    > It is a subobject of a FormGroupState (That has the id : <formId>)
 *    > Identifiable in FormGroupState by its 'ctrlName' (Unique Identifier in FormGroupState)
 *    > Having an Id generated as '<formID>.<ctrlName>'
 *  
 *  - UI informations
 *    > Label, displayed on field and describing the field content
 *    > Placeholder, displayed inside the field as long as the user does not set a value
 *    > Value, editable by user
 *    > Error Message, generated according to field validation properties
 * 
 *  - Validation Properties
 *    > 'required' input parameter
 *    > Generated internal validationFns (Accessible from children)
 *    > Configurable DynamicValidationFns (Accessible from children)
 * 
 *  - Persistance Properties
 *    > Field persistance in global ngrx store after component destroy is handled by related Form
 *    > However it is possible to enforce field unpersistance with 'unpersist' input
 * 
 * Technical implementation is :
 *  - FormControlState is stored in Ngrx global state and updated with 'ngrx-forms' library
 *  - ValidationFns (static & dynamic) managed by homemade angular service
 *  - Error message managed by homemade angular service
 *
 *  @param formID - FormGroupState Id to add the FormControlState on
 *  @param ctrlName - FormControlState Name
 *  @param label - (Optional | Default:<ctrlName>)
 *  @param placeholder - (Optional)
 *  @param value - (Optional | Default:'')
 *  @param required - (Optional | Default:true) - Add 'required' validationFn on the field
 *  @param dynamicValFns - (Optional) - Array of DynamicControlValidationFns
 *  @param unpersist - (Optional) - If true, field state is deleted when component is destroy
 */
@Component({
  selector: 'app-field',
  template: ``,
})
export class FieldComponent implements OnInit, OnDestroy {

  private _ctrlName!: string;
  private _formGroupState : FormGroupState<FormValue> | undefined;
  private _validationFns: ValidationFn<any>[] = [];
  private _dynamicValFns: DynamicControlValidationFn[] = [];
  private _unpersist: boolean = false;

  // Input
  @Input() formId!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label === undefined) this.label = value; 
  }
  @Input() label!: string;
  @Input() placeholder: string | undefined;
  @Input() value: string | boolean | number = '';
  @Input() format: string = '';
  @Input() required: boolean = true;
  @Input() set dynamicValFns(input: DynamicControlValidationFn[]) {
    this._dynamicValFns = input;
  };
  @Input() set unpersist(input: boolean) { this._unpersist = input }

  // Accessor
  get form() { return this._formGroupState! }
  get ctrlName() { return this._ctrlName; }
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.formErrorService; }
  protected get validationFns() { return this._validationFns }
  protected get dynamicValidationFns() { return this._dynamicValFns }

  constructor(
    protected store: Store,
    private formErrorService: FormErrorService,
    private validationFnsService: ValidationFnsService
  ) {}

  ngOnInit() {

    // Subscribe to FormGroupState
    this.store.select(fromStore.selectFormById(this.formId))
      .subscribe(s => this._formGroupState = s);

    // Add ValidationFns according to configuration
    if(this.required === true) { this._validationFns.push(required); }
    
    // Save ValidationFns
    this.validationFnsService.setControlValidationFns(
      this.formId, this._ctrlName, 
      this._validationFns);
    
    // Save dynamicValidationFns
    this.validationFnsService.addDynamicControlValidationFns(
      this.formId, this._ctrlName,
      this._dynamicValFns);

    // If control is not in the state, add FormControlState to FormGroupState
    if(this.ctrl === undefined) {
      this.store.dispatch(fromStore.addControlInFormAction({
        formId: this.formId,
        controlName: this._ctrlName, 
        controlValue: this.value
      }));
    }  
  }

  ngOnDestroy(): void {

    // If configured with unpersist, delete control state on destroy
    if(this._unpersist)
      this.store.dispatch(fromStore.removeControlInFormAction({ 
        formId: this.formId,
        controlName: this._ctrlName
      })); 
  }
}
