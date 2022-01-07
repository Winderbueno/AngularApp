//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { FormGroupState } from 'ngrx-forms';
//#endregion

//#region Store
import * as fromStore from '../store';
import { FormValue } from '@module/ngrx-form/store/form.state';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  protected _formGroupState!: FormGroupState<FormValue> | undefined;
  private _title: string = "Form Title";
  private _submitValidAction: TypedAction<string> | undefined;
  private _submitInvalidAction: TypedAction<string> | undefined;

  // Accessor
  get title() { return this._title; }
  protected set title(title:string) { this._title = title; }
  
  get submitValidAction() { return this._submitValidAction!; }
  protected set submitValidAction(action:TypedAction<string>) { this._submitValidAction = action; }
  get submitInvalidAction() { return this._submitInvalidAction!; }
  protected set submitInvalidAction(action:TypedAction<string>) { this._submitInvalidAction = action; }
  
  get formGroupState() { return this._formGroupState ? this._formGroupState : undefined; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {}

  ngOnInit() {

    // Suscribe to FormGroupState
    this.store.select(fromStore.selectFormByID(this._title))
      .subscribe(s => this._formGroupState = s);
    
    // Initialise FormGroupState
    if(this.formGroupState === undefined) {
      this.store.dispatch(
        fromStore.createFormAction({ 
          name: this._title,
          submitValidAction: this._submitValidAction,
          submitInvalidAction: this._submitInvalidAction
        }));        
    }
  }

  onSubmit(): void {
    this.store.dispatch(fromStore.submitFormAction({ formId: this._title}));
  }
}
