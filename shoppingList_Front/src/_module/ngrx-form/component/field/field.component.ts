//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { FormErrorService } from '@module/ngrx-form/service/form-error.service';
import { FormGroupValidationFnsService } from '@module/ngrx-form/service/form-validation.service';
import * as fromStore from '@module/ngrx-form/store';
import { FormValue } from '@module/ngrx-form/store/form.state';
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
  private _validators: ValidationFn<any>[] = [];

  // Input
  @Input() formId!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value; 
  }
  @Input() label!: string;
  @Input() required: boolean = true;

  // Accessor
  get form() { return this._formGroupState! }
  get ctrlName() { return this._ctrlName; }
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.formErrorService; }
  protected get validators() { return this._validators }

  constructor(
    protected store: Store,
    private formErrorService: FormErrorService,
    private formValidationFnsService: FormGroupValidationFnsService
  ) {}

  ngOnInit() {

    // Subscribe to FormGroupState
    this.store.select(fromStore.selectFormByID(this.formId))
      .subscribe(s => this._formGroupState = s);

    // Add Validator according to configuration
    if(this.required === true) { this._validators.push(required); }  
    
    // Save ValidationFns
    let ctrlId:string = this.formId + '.' + this._ctrlName;
    if(this.formValidationFnsService.getControlValidationFns(ctrlId) === undefined) {
      this.formValidationFnsService.setValidationFns(ctrlId, this._validators);
    }    

    // Add FormControlState to FormGroupState
    if(this.ctrl === undefined) {
      this.store.dispatch(fromStore.addGroupControlAction({
        formId: this.formId,
        control: { 
          name:this._ctrlName, 
          value:''
        }
      }));
    }  
  }
}
