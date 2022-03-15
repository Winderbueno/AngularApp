//#region Angular, Material, NgRx
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Store, Model, Service
import * as fromStore from '@form/store/';
import { FormValue } from '@form/model/form-value.model';
import { DynamicControlValidationFn } from '@form/model/validation-fns.model';
import { FieldFormatEnum } from '@form/model/field-format.enum';
import { ErrorMessageService } from '@form/service/error-message.service';
import { ValidationFnsService } from '@form/service/validation-fns.service';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 * 
 *  - A FormControlState,
 *    > Represent the state of the field (valid, dirty, touch...)
 *    > It is a subobject of a FormGroupState (That has the id : <formId>)
 *    > Identifiable in FormGroupState by its 'ctrlName' (Unique Identifier in FormGroupState)
 *    > Having an Id generated as '<formID>.<ctrlName>'
 *  
 *  - UI information,
 *    > Label, displayed on field and describing the field content
 *    > Placeholder, displayed inside the field as long as the user does not set a value
 *    > Value, editable by user
 *    > Error Message, generated according to field validation properties
 * 
 *  - Validation Properties,
 *    > 'required' input parameter
 *    > Generated internal validationFns (Accessible from children)
 *    > Configurable DynamicValidationFns (Accessible from children)
 * 
 *  - Persistance Properties,
 *    > Field persistance in global ngrx store after component destroy is handled by related Form
 *    > However it is possible to enforce field unpersistance with 'unpersist' input
 * 
 * Technical implementation
 * 
 *  - FormControlState is defined & updated in Ngrx global state using 'ngrx-forms' library
 *  - ValidationFns (static & dynamic) are managed by an angular service
 *  - Error messages are managed by an angular service
 *
 *  @param formID - FormGroupState Id to add the FormControlState on
 *  @param ctrlName - FormControlState Name
 *  @param label - (? | Default:<ctrlName>)
 *  @param placeholder - (?)
 *  @param value - (? | Default:'')
 *  @param format - (?) - Defined by Enum (Can be 'Email' | 'Number' | 'Password')
 *  @param required - (? | Default:true) - Add 'required' validationFn on the field
 *  @param addValidationFns - (?) - Array of ValidationFns 
 *  @param addDynamicValidationFns - (?) - Array of DynamicValidationFns
 *  @param unpersist - (? | Default:false) - If true, field state is deleted when component is destroy
 */
@Component({template: ``})
export class FieldComponent implements OnInit, OnDestroy {

  // Private variable
  private _ctrlName!: string;
  private _formGroupState : FormGroupState<FormValue> | undefined;
  private _validationFns: ValidationFn<any>[] = [];
  private _dynamicValidationFns: DynamicControlValidationFn[] = [];
  private _unpersist: boolean = false;

  // Component input
  @Input() formId!: string;
  @Input() 
  get ctrlName() { return this._ctrlName; }
  set ctrlName(input: string) {
    this._ctrlName = input;
    if (this.label === undefined) this.label = input; 
  }
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() value: string | boolean | number = '';
  @Input() format: FieldFormatEnum | undefined;
  @Input() required: boolean = true;
  @Input() addValidationFns: ValidationFn<any>[] = [];
  @Input() addDynamicValidationFns: DynamicControlValidationFn[] = [];
  @Input() set unpersist(input: boolean) { this._unpersist = input }

  // Accessor
  get form() { return this._formGroupState! }
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.errorMessageService; }
  protected get validationFns() { return this._validationFns }
  protected get dynamicValidationFns() { return this._dynamicValidationFns }

  constructor(
    protected store: Store,
    private errorMessageService: ErrorMessageService,
    private validationFnsService: ValidationFnsService
  ) {}

  ngOnInit() {

    // Subscribe to FormGroupState
    this.store.select(fromStore.selectForm(this.formId))
      .subscribe(s => this._formGroupState = s);

    // Add user configured validationFns (static&dynamic)
    if(this.required === true) { this._validationFns.push(required); }
    this.addValidationFns.forEach(elt => this._validationFns.push(elt));
    this.addDynamicValidationFns.forEach(elt => this._dynamicValidationFns.push(elt));
    
    // Save ValidationFns
    this.validationFnsService.setControlValidationFns(
      this.formId, this._ctrlName, 
      this._validationFns);
    
    // Save dynamicValidationFns
    this.validationFnsService.addDynamicControlValidationFns(
      this.formId, this._ctrlName,
      this._dynamicValidationFns);

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
