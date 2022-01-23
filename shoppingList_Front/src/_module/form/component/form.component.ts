//#region Angular, Material, NgRx
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '@form/store/';
import { FormValue } from '@form/store/form.state';
//#endregion

/**
 * Form Component
 *
 * This component manage a Form that has :
 * 
 *  - FormGroupState, representing the state of the form (valid, dirty, touch...)
 * 
 *  - Title (Used as FormId in FormGroupState)
 * 
 *  - Persistance Properties
 *    > With 'persist' property set to true, the form will be persisted in global ngrx state 
 *    > even when the component is destroyed. Doing so, all field in the form will be 
 *    > as a consequence persisted
 * 
 *    > Note : this allow to persist form state when changing route in the application
 *    > However, if the app is restarted by clicking refresh button for example, 
 *    > Except if the state is rehydrated by a mecanism, formState will be lost
 *
 *  @param formId - FormGroupState Id
 *  @param persist - FormControlState Name
 */
@Component({
  selector: 'k-form',
  template: ``,
})
export class FormComponent implements OnInit, OnDestroy {

  // Form
  protected _formGroupState: FormGroupState<FormValue> | undefined;
  private _formId: string = "Form Title";
  private _persist: boolean = false;
  
  // Accessor
  get formId() { return this._formId; }
  protected set formId(input: string) { this._formId = input; }
  get value() { return this._formGroupState!.value }
  get formGroupState() { return this._formGroupState!; }
  protected set persist(input: boolean) { this._persist = input; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {}

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectFormById(this._formId))
      .subscribe(s => this._formGroupState = s);
    
    // If form does not exist in state, create FormState, else resetState
    this._formGroupState === undefined ?
      this.store.dispatch(fromStore.createFormAction({ formId: this._formId })) :
      this.store.dispatch(fromStore.resetFormAction({ formId: this._formId }));
  }

  ngOnDestroy(): void {
    if(!this._persist)
      this.store.dispatch(fromStore.deleteFormAction({ formId: this._formId })); 
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this._formId }));
    
    // TODO - Should not dispatch action sequentially
    if(this._formGroupState?.isValid) {
      if(this.submitValidAction() != undefined) { this.store.dispatch(this.submitValidAction()!); }
    } else {
      if(this.submitInvalidAction() != undefined) { this.store.dispatch(this.submitInvalidAction()!); }
    }
  }

  submitValidAction(): TypedAction<string> | undefined { return undefined; }
  submitInvalidAction(): TypedAction<string> | undefined { return undefined; }
}
