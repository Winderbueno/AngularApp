//#region Angular, Material, NgRx
import { Component, Input, OnInit, OnDestroy, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Store, Model, Service
import * as fromStore from '@form/store';
import { FormValue } from '@form/model/form-value.model';
import { DynamicControlValidationFn } from '@form/model/validation-fns.model';
import { FieldFormatEnum } from '@form/model/field-format.enum';
import { ErrorMessageService } from '@form/service/error-message.service';
import { ValidationFnsService } from '@form/service/validation-fns.service';
import { FormComponent } from '../form/form.component';
//#endregion

/**
 * Field Component
 *
 * This component manage a 'field' that has :
 * 
 *  - A unique linked form (See 'FormComponent')
 * 
 *  - A state,
 *    > Identifiable by a calculated id : '<formId>.<ctrlName>'
 *      - 'formId' being the linked form unique identifier
 *      - 'ctrlName' 
 *    > Based on 'FormControlState' model (valid, dirty, touch...)
 *      (See : https://ngrx-forms.readthedocs.io/en/master/user-guide/form-controls/)
 *    > Which is a sub-object of the form state
 *    > Persisted in 'ngrx global state'
 *  
 *  - Usage information,
 *    > Label, describing the field content
 *    > Placeholder, displayed inside the field as long as the user does not set a value
 *    > Value, editable by user
 *    > Error Message, generated according to field validation properties
 * 
 *  - Validation Rules,
 *    > 'required' & 'format' input parameter
 *    > Generated internal validationFns (Accessible from children)
 *    > Configurable DynamicValidationFns (Accessible from children)
 * 
 *  Field initial usage information, validation rules and state persistance can be configured with input.
 * 
 * Technical implementation note :
 *  - Field State is updated with 'ngrx-forms' actions
 *  - ValidationFns (static & dynamic) & Error messages  are managed by angular services
 *
 *  @param formId? - FormGroupState Id to add the FormControlState on
 *    (Default:[formId] of <k-form> element that directly contains the <k-form-field-xxx>)
 *    Note : user can specify [formId] manually to attach the field to another form.
 *      However, in order for this feature to work, the form must have been initialised 
 *      before the field in the component tree structure. (TODO - )
 *  @param ctrlName - FormControlState Name
 *  @param label? - (Default:<ctrlName>)
 *  @param placeholder? - Non active value visible in field if value is empty 
 *  @param value? - (Default:'')
 *  @param format? - Field value format (Defined by enum : 'Email' | 'Number' | 'Password')
 *  @param required? - (Default:true) - Add 'required' validationFn on the field
 *  @param addValidationFns? - Array of ValidationFns 
 *  @param addDynamicValidationFns? - Array of DynamicValidationFns
 *  @param unpersist? - (Default:false) - If true, field state is deleted when component is destroy
 */
@Component({ template: '' })
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
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() value: string | boolean | number = '';
  @Input() format?: FieldFormatEnum;
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
    public injector:Injector,
    private errorMessageService: ErrorMessageService,
    private validationFnsService: ValidationFnsService
  ) {}

  ngOnInit() {

    // By default, get formId from parent <k-form>
    let formComponent = this.injector.get(FormComponent);
    if(this.formId === undefined && formComponent !== undefined) { 
      this.formId=formComponent.formId; 
    }

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
