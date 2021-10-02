//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  private _form!: FormGroup;
  private _title: string = "Form Title";
  private _submitted: boolean = false; // TODO -Encapsulate this info in a Form Object with FormGroup ?

  // Accessor
  get form() { return this._form;}
  get ctrls() { return this._form.controls; }
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }
  get submitted() { return this._submitted; }


  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) { }

  ngOnInit() {
    // Form definition
    // TODO - Put this in an NgRx Store :O ?
    this._form = new FormGroup({});
  }

  onSubmit(): void {

    this._submitted = true;

    // Stop here if form is invalid
    if (this._form.invalid) { return; }

    this.dispatchSubmitAction();
  }

  dispatchSubmitAction() : void {
    this.store.dispatch(this.submitAction());
  }

  submitAction() : TypedAction<string> {
    return fromStore.formSubmitAction;
  }
}
