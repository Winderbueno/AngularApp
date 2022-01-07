//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region Store
import * as fromStore from '../store';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  protected _formState!: fromStore.FormState;
  private _title: string = "Form Title";
  private _submitValidAction: TypedAction<string> = fromStore.formSubmitAction();
  private _submitInvalidAction: TypedAction<string> | undefined;

  // Accessor
  get title() { return this._title; }
  protected set title(title:string) { this._title = title; }
  
  get submitValidAction() { return this._submitValidAction; }
  protected set submitValidAction(action:TypedAction<string>) { this._submitValidAction = action; }
  get submitInvalidAction() { return this._submitInvalidAction!; }
  protected set submitInvalidAction(action:TypedAction<string>) { this._submitInvalidAction = action; }
  
  get formState() { return this._formState? this._formState : undefined; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {
    store.select(fromStore.selectState).subscribe(s => this._formState = s);
  }

  ngOnInit() {
    // Form State Initialisation
    if(this._formState[this._title] === undefined) {
      this.store.dispatch(
        fromStore.CreateFormAction({ 
          name: this._title,
          submitValidAction: this._submitValidAction,
          submitInvalidAction: this._submitInvalidAction
        }));
    }
  }

  //onSubmit(): void {
    // Stop here if form is invalid
    //if (this._formState[this._title].isInvalid) { return; }

    //this.dispatchSubmitAction();
  //}

  //dispatchSubmitAction() : void {
    //this.store.dispatch(this.submitAction());
  //}
}
