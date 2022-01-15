//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import * as fromStore from '@form/store/';
import { FormValue } from '@form/store/form.state';
import { FormErrorService } from '@form/service/form-error.service';
import { ValidationFnsService } from '@form/service/validation-fns.service';
import { StateParamControlValidationFn } from '@form/model/validation-fns.model';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 *  - Static UI information
 *    > Label (Displayed Name)
 *    > Placeholder (Displayed in the field as long as the user does not set a value
 * 
 *  - A FormControlState
 *    > Accessible in a FormGroupState by its 'ctrlName'
 *    > An Id (Generated as '<formID>.<ctrlName>')That has (Unique Identifier)
 *  
 *  - Validation Property
 *    > 'required' input parameter
 *    > Generated internal validationFns (Accessible from children)
 *    > Configurable formStateParametrizableValidationFns (Accessible from children)
 * 
 *  - Error Message (Displayed according to the validation property)
 * 
 * Technical implementation is :
 *  - FormControlState is stored in Ngrx global state updated with 'ngrx-forms' library
 *  - ValidationFns (static & dynamic) managed by homemade angular service
 *  - Error message managed by homemade angular service
 *
 *  @param formID - FormGroupState ID to add the FormControlState on
 *  @param ctrlName - FormControlState Name (Note : ControlID in state is
 *  @param label - (Optional | Default:<ctrlName>) - Field label
 *  @param placeholder - (Optional) - Field placeholder
 *  @param required - (Optional | Default:true) - Add 'required' validationFn on the field
 *  @param stateParamValFns - (Optional) - Array of stateParamValidationFns
 */
@Component({
  selector: 'app-field',
  template: ``,
})
export class FieldComponent implements OnInit {

  // FormState
  private _ctrlName!: string;
  private _formGroupState : FormGroupState<FormValue> | undefined;
  private _validationFns: ValidationFn<any>[] = [];
  private _stateParamValFns: StateParamControlValidationFn[] = [];

  // Input
  @Input() formId!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value; 
  }
  @Input() label!: string;
  @Input() placeholder: string | undefined;
  @Input() required: boolean = true;
  @Input() set stateParamValFns(val: StateParamControlValidationFn[]) {
    this._stateParamValFns = val;
  };

  // Accessor
  get form() { return this._formGroupState! }
  get ctrlName() { return this._ctrlName; }
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.formErrorService; }
  protected get validationFns() { return this._validationFns }
  protected get stateParamValidationFns() { return this._stateParamValFns }

  constructor(
    protected store: Store,
    private formErrorService: FormErrorService,
    private validationFnsService: ValidationFnsService
  ) {}

  ngOnInit() {

    // Subscribe to FormGroupState
    this.store.select(fromStore.selectFormById(this.formId))
      .subscribe(s => this._formGroupState = s);

    // Add ValidationFns according to component configuration
    if(this.required === true) { this._validationFns.push(required); }
    
    // Save ValidationFns
    this.validationFnsService.setControlValidationFns(
      this.formId, this._ctrlName, 
      this._validationFns);
    
    // Save StateParamValidationFns
    this.validationFnsService.addStateParamControlValidationFn(
      this.formId, this._ctrlName,
      this._stateParamValFns);

    // If control is not in the state, add FormControlState to FormGroupState
    if(this.ctrl === undefined) {
      this.store.dispatch(fromStore.addControlToFormAction({
        formId: this.formId,
        control: { 
          name:this._ctrlName, 
          value:''
        }
      }));
    }  
  }
}
