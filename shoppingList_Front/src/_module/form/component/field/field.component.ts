//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FormErrorService } from '@form/service/form-error.service';
import { ValidationFnsService } from '@form/service/validation-fns.service';
import * as fromStore from '@form/store/';
import { FormValue } from '@form/store/form.state';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 *  - A ControlID (Unique Identifier of the FormControlState)
 *  - A Label (Displayed Name)
 *  - A List of Validators (Accessible from children)
 *  - Related Error Messages
 *
 * It adds a FormControlState to the FormGroupState identified by the formID input
 *
 *  @param formID - FormGroupState ID to add the FormControlState on
 *  @param ctrlName - FormControlState Name (Note : ControlID in state is generated as '<formID>.<ctrlName>')
 *  @param label - (Optional | Default:<ctrlName>) - Label of the field
 *  @param placeholder - (Optional) - Placeholder displayed in the field as long as the user does not fill it
 *  @param required - (Optional | Default:true) - Set 'required' validator on FormControlState
 */
@Component({
  selector: 'app-field',
  template: ``,
})
export class FieldComponent implements OnInit {

  // FormState
  private _formGroupState : FormGroupState<FormValue> | undefined;
  private _ctrlName!: string;
  private _validationFns: ValidationFn<any>[] = [];

  // Input
  @Input() formId!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value; 
  }
  @Input() label!: string;
  @Input() placeholder: string | undefined;
  @Input() required: boolean = true;

  // Accessor
  get form() { return this._formGroupState! }
  get ctrlName() { return this._ctrlName; }
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.formErrorService; }
  protected get validationFns() { return this._validationFns }

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
      this.formId, 
      this._ctrlName, 
      this._validationFns);
    

    // Add FormControlState to FormGroupState
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
