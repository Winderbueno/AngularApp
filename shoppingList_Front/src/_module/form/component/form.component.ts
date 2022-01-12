//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '@form/store/';
import { FormValue } from '@form/store/form.state';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  protected _formGroupState!: FormGroupState<FormValue> | undefined;
  private _title: string = "Form Title";
  
  // Accessor
  get title() { return this._title; }
  protected set title(title:string) { this._title = title; }

  get value() { return this._formGroupState!.value }
  get formGroupState() { return this._formGroupState ? this._formGroupState : undefined; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {}

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectFormById(this._title))
      .subscribe(s => this._formGroupState = s);
    
    // Initialise FormGroupState
    if(this.formGroupState === undefined) {
      this.store.dispatch(fromStore.createFormAction({ name: this._title }));
    }
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this._title }));
    
    if(this._formGroupState?.isValid) {
      if(this.submitValidAction() != undefined) { this.store.dispatch(this.submitValidAction()!); }
    } else {
      if(this.submitInvalidAction() != undefined) { this.store.dispatch(this.submitInvalidAction()!); }
    }
  }

  submitValidAction(): TypedAction<string> | undefined { return undefined; }
  submitInvalidAction(): TypedAction<string> | undefined { return undefined; }
}
