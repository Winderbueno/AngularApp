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
import { StateParamControlValidationFn } from '@form/model/validation-fns.model';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 * 
 *  - A FormControlState
 *    > Linked to one FormGroupState (that has the id : <formId>)
 *    > Identifiable in FormGroupState by its 'ctrlName' (Unique Identifier in FormGroupState)
 *    > An Id (Generated as '<formID>.<ctrlName>')
 *  
 *  - Static UI information
 *    > Label (Displayed field label)
 *    > Placeholder (Displayed in the field as long as the user does not set a value)
 * 
 *  - Validation Properties
 *    > 'required' input parameter
 *    > Generated internal validationFns (Accessible from children)
 *    > Configurable formStateParametrizableValidationFns (Accessible from children)
 * 
 *  - Error Message (Displayed according to the validation property)
 * 
 * Technical implementation is :
 *  - FormControlState is stored in Ngrx global state and updated with 'ngrx-forms' library
 *  - ValidationFns (static & dynamic) managed by homemade angular service
 *  - Error message managed by homemade angular service
 *
 *  @param formID - FormGroupState ID to add the FormControlState on
 *  @param ctrlName - FormControlState Name (Note : ControlID in state is
 *  @param label - (Optional | Default:<ctrlName>) - Field label
 *  @param placeholder - (Optional) - Field placeholder
 *  @param required - (Optional | Default:true) - Add 'required' validationFn on the field
 *  @param stateParamValFns - (Optional) - Array of stateParamValidationFns
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
  private _stateParamValFns: StateParamControlValidationFn[] = [];
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
  @Input() required: boolean = true;
  @Input() set stateParamValFns(val: StateParamControlValidationFn[]) {
    this._stateParamValFns = val;
  };
  @Input() set unpersist(input: boolean) { this._unpersist = input }

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

    // Add ValidationFns according to configuration
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
