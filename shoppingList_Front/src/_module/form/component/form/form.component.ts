//#region Angular, Material, NgRx
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region This
import * as fromStore from '../../store';
import { FormValue } from '../../model/form-value.model';
//#endregion

/**
 * Form Component
 *
 * This component manage a 'form' that :
 * 
 *  - Is bind to a state,
 *    > Identifiable by a user configured 'formId'
 *    > Based on 'FormGroupState' model (valid, dirty, touch...)
 *      (See : https://ngrx-forms.readthedocs.io/en/master/user-guide/form-groups/)
 * 
 *  - Has default behaviours :
 *    > On component init, create its state on 'globalState' (or reset it if already existing)
 *    > On submit,
 *      - Dispatch a 'submitFormAction'
 *      - Validate its fields (implemented via an effect)
 *    > On component destroy, persist its state in 'globalState'
 * 
 *  - Has its Validation & Persistance behaviours configurable with directives (See : ../../directive/form)
 *      
 *  NOTE : Persistance in 'globalState' is not a 'browserStorage' persistance
 *    Hence, on its own, FormModule does not provide a form which is 'app restart proof' (e.g. By clicking refresh button)
 *    For this, you'll have to implement a browserStorage sync mecanism. (e.g. with 'ngrx-store-localstorage')
 *    However, to help this mecanism know which form to sync, FormModule :
 *      - Initiate a formId's list listing form that we want to sync with browserStorage (all of them by default)
 *      - Allow to specify if we want to remove a form from that list (Using 'no-browser-persist' directive on <k-form>)
 *      - Give access to this list (Using 'getFormToPersist' method)
 *
 *  @param formId! - FormGroupState Id
 *  @param browserPersist? - (Default:true) - If false, 
 *    This config is stored in state so a browser sync mecanism can know 
 *    which form to sync by calling 'form.selector.ts/getFormToPersist' method
 *  @param statePersist? - (Default:true) - If false, 
 *    On component destruction, form state is deleted from global state
 *  @param validate? - (Default:true) - If false, 
 *    Disable any formState field validation
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

  // Conf
  browserPersist = true;
  statePersist = true;
  validate = true;  

  constructor(private store: Store) {}

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectForm(this.formId))
      .subscribe(s => this._formGroupState = s);
    
    // If form does not exist in state, create FormState
    if(this._formGroupState === undefined) {
      this.store.dispatch(fromStore.createFormAction({ 
        formId: this.formId,
        validate: this.validate,
        browserPersist: this.browserPersist
      }))
    }
    // Else, if form is configured to be validated, resetState
    else {
      if(this.validate) {
        this.store.dispatch(fromStore.resetFormAction({ formId: this.formId }));
      }
    } 
  }

  ngOnDestroy(): void {
    if(!this.statePersist) { 
      this.store.dispatch(fromStore.deleteFormAction({ formIds: [this.formId] })); 
    }
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this.formId }));
  }
}