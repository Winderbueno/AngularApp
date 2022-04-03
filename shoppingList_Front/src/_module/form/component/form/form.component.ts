//#region Angular, Material, NgRx
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//#endregion

//#region Store, Model
import * as fromStore from '@form/store';
import { FormGroupState } from 'ngrx-forms';
import { FormValue } from '@form/model/form-value.model';
//#endregion

/**
 * Form Component
 *
 * This component manage a 'form' that has :
 * 
 *  - A state, 
 *    > Identifiable by a user configured 'formId'
 *    > Based on 'FormGroupState' model (valid, dirty, touch...)
 *      (See : https://ngrx-forms.readthedocs.io/en/master/user-guide/form-groups/)
 *    > Persisted in 'ngrx global state' (with all its related fields state) 
 * 
 *  - Default behaviours :
 *    > On component init, define its state (or reset it if already defined)
 *    > On submit,
 *      - Dispatch a 'submitFormAction'
 *      - Validate its fields
 *      
 *  NOTE : 'Global ngrx state' is not 'localStorage'
 *    > Hence, default form persistance is not 'app restart proof' (e.g. By clicking refresh button)
 *    > Except if the state is rehydrated by a mecanism, formState will be lost
 *    
 *  Form behaviours can be configured with input.
 *
 *  @param formId! - FormGroupState Id
 *  @param unpersist? - (Default:false) - If true, form state is deleted on component destruction
 *  @param validate? - (Default:true) - If false, disable any formState validation
 */
@Component({
  selector: 'k-form[formId]',
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit, OnDestroy {

  // Form
  private _formGroupState: FormGroupState<FormValue> | undefined;
  get formGroupState() { return this._formGroupState!; }

  // Input
  @Input() formId!: string;
  @Input() unpersist: boolean = false;
  @Input() validate: boolean = true;  

  constructor(private store: Store) {}

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectForm(this.formId))
      .subscribe(s => this._formGroupState = s);
    
    // If form does not exist in state, create FormState, 
    if(this._formGroupState === undefined) {
      this.store.dispatch(fromStore.createFormAction({ 
        formId: this.formId,
        validate: this.validate
      }))
    } else { // Else, if form is configured to be validated, resetState
      if(this.validate) {
        this.store.dispatch(fromStore.resetFormAction({ formId: this.formId }));
      }
    } 
  }

  ngOnDestroy(): void {
    if(this.unpersist) { 
      this.store.dispatch(fromStore.deleteFormAction({ formIds: [this.formId] })); 
    }
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this.formId }));
  }
}