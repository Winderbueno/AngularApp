//#region Angular, Material, NgRx
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControlState, FormGroupState } from 'ngrx-forms';
//#endregion

//#region Component, Model, Service
import { NgrxFormErrorService } from '@module/ngrx-form/service/ngrx-form-error.service';
import * as fromStore from '@module/ngrx-form/store';
import { DynamicFormValue } from '@module/ngrx-form/store/ngrx-form.state';
//#endregion

/**
 * Field Component
 *
 * This component manage a Field that has :
 *  - A Name (Technical Name that refer to the Control)
 *  - A Label (Displayed Name)
 *  - A List of Validators (Accessible from children)
 *  - Related Error Messages (Accessible from children)
 *
 * It attaches the FormControl to the provided input FormGroup
 *
 *  @param formID - FormGroup to add the FormControl on
 *  @param ctrlName - FormControl Technical Name, If a label is not provided, the Control name is used as label
 *  @param label - (Optional) - Label of the field
 *  @param required - (Optional | (Default : True)) - Set 'required' validator on FormControl 
 *
 */
@Component({
  selector: 'app-ngrx-field',
  template: ``,
})
export class NgrxFieldComponent implements OnInit {

  // FormState
  private _formGroupState : FormGroupState<DynamicFormValue> | undefined;
  private _ctrlName!: string;

  // Input
  @Input() formID!: string;
  @Input() set ctrlName(value: string) {
    this._ctrlName = value;
    if (this.label == null) this.label = value;
  }
  @Input() label!: string;
  @Input() required: boolean = true;

  // Accessor
  get ctrl() { return this._formGroupState?.controls; }
  get ctrlName() { return this._ctrlName; }
  get err() { return this.formErrorService; }

  ctrlState(ctrlName:string): FormControlState<string|boolean|number> {
    return this._formGroupState!.controls[ctrlName] as unknown as FormControlState<string|boolean|number>; 
  }

  constructor(
    protected store: Store,
    private formErrorService: NgrxFormErrorService) {
  }

  ngOnInit() {

    this.store.select(fromStore.selectFormByID(this.formID)).subscribe(s => this._formGroupState = s);

    // Add Control to Group
    if(this.ctrlState(this.ctrlName) === undefined) {
      this.store.dispatch(fromStore.AddGroupControlAction({
        formID: this.formID,
        control: { name:this.ctrlName, value:'' }
      }));
    }

    // Add Validator (According to Conf)
    //validate<string>(value => !value ? { missing: true } : {})(control)
    //if(this.required === true) { this._validators.push(Validators.required); }    
  }
}
