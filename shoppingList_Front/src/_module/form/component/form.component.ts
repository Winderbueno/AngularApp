//#region Angular, Material, NgRx
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
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
 *  - FormGroupState, 
 *    > Represent the state of the form (valid, dirty, touch...)
 *    > Identifiable by as FormId
 * 
 *  - Persistance Property
 *    > By default, the form will be persisted in global ngrx state after component destruction.
 *    > Doing so, all field in the form will be as a consequence persisted. 
 *    > However it is possible to deactivate this behaviour
 * 
 *  - NOTE : 'Global ngrx state' is not 'localStorage' 
 *    > Hence, default form persistance is not 'app restart proof' (e.g. By clicking refresh button)
 *    > Except if the state is rehydrated by a mecanism, formState will be lost
 *
 *  @param formId - FormGroupState Id
 *  @param unpersist - (? | Default:false) - If true, form state is deleted when component is destroy
 */
 @Component({template: ``})
export class FormComponent implements OnInit, OnDestroy {

  // Form
  protected _formGroupState: FormGroupState<FormValue> | undefined;
  private _formId: string = "Form Title";
  private _unpersist: boolean = false;
  
  // Accessor
  get formId() { return this._formId; }
  protected set formId(input: string) { this._formId = input; }
  get value() { return this._formGroupState!.value }
  get formGroupState() { return this._formGroupState!; }
  protected set unpersist(input: boolean) { this._unpersist = input; }

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
    if(this._unpersist) this.store.dispatch(fromStore.deleteFormAction({ formId: this._formId })); 
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this._formId }));
  }
}