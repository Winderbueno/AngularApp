//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState, ValidationFn } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';
//#endregion

//#region Component, Model, Service
import { NgrxFormErrorService } from '@module/ngrx-form/service/ngrx-form-error.service';
import * as fromStore from '@module/ngrx-form/store';
import { FormValue } from '@module/ngrx-form/store/ngrx-form.state';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 *  - A ControlID (Unique Identifier of the FormControlState)
 *  - A Label (Displayed Name)
 *  - A List of Validators (Accessible from children)
 *  - Related Error Messages (Accessible from children)
 *
 * It adds the FormControlState to the FormGroupState refered with formID input
 *
 *  @param formID - FormGroupState ID to add the FormControlState on
 *  @param ctrlName - Control Name - Note : ControlID in state is generated as '<formID>.<ctrlName>'
 *  @param label - (Optional | (Default : <ctrlName>)) - Label of the field
 *  @param required - (Optional | (Default : True)) - Set 'required' validator on FormControl 
 *
 */
@Component({
  selector: 'app-ngrx-field',
  template: ``,
})
export class NgrxFieldComponent implements OnInit {

  // FormState
  private _formGroupState : FormGroupState<FormValue> | undefined;
  private _ctrlName!: string;
  private _validators: ValidationFn<any>[] = [];

  // Input
  @Input() formID!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value; 
  }
  @Input() label!: string;
  @Input() required: boolean = true;

  // Accessor
  get ctrl() { return this._formGroupState!.controls[this._ctrlName] as unknown as FormControlState<string|boolean|number>; }
  get err() { return this.formErrorService; }
  protected get validators() { return this._validators }

  constructor(
    protected store: Store,
    private formErrorService: NgrxFormErrorService) {
  }

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectFormByID(this.formID))
      .subscribe(s => this._formGroupState = s);

    // Add Validator according to configuration
    if(this.required === true) { this._validators.push(required); }  

    // Add Control to Group
    if(this.ctrl === undefined) {
      this.store.dispatch(fromStore.AddGroupControlAction({
        formID: this.formID,
        control: { 
          name:this._ctrlName, 
          value:'',
          validationFns:this._validators
        }
      }));
    }  
  }
}
