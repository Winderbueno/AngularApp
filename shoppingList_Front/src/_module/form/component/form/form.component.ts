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
 * This component manage a Form that has :
 * 
 *  - A FormGroupState, 
 *    > Represent the state of the form (valid, dirty, touch...)
 *    > Identifiable by as FormId
 * 
 *  - Persistance Properties,
 *    > By default, the form will be persisted in global ngrx state after component destruction.
 *    > Doing so, all field in the form will be as a consequence persisted. 
 *    > However it is possible to deactivate this behaviour
 * 
 *  - NOTE : 'Global ngrx state' is not 'localStorage' 
 *    > Hence, default form persistance is not 'app restart proof' (e.g. By clicking refresh button)
 *    > Except if the state is rehydrated by a mecanism, formState will be lost
 *
 *  @param formId! - FormGroupState Id
 *  @param unpersist? - (Default:false) - If true, formState is cleaned when component is destroy
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
      this.store.dispatch(fromStore.deleteFormAction({ formId: this.formId })); 
    }
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this.formId }));
  }
}