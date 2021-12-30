//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { LoginFormValue } from '../model/ngrx-form.model';
//#endregion

//#region Store
import * as fromStore from '../store';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class NgrxFormComponent implements OnInit {

  // Form
  private _loginFormState: FormGroupState<LoginFormValue> | undefined;
  private _title: string = "Form Title";

  // Accessor
  get form() { return this._loginFormState ; }
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {
    store.select(fromStore.selectLoginForm).subscribe(s => this._loginFormState = s);
  }

  ngOnInit() {
    // Form definition
    const group = createFormGroupState<{}>(this._title, {});
    //this._form = new FormGroup({});
    console.log(this._loginFormState);
  }

  onSubmit(): void {
    // Stop here if form is invalid
    if (this._loginFormState?.isInvalid) { return; }
  }
}
