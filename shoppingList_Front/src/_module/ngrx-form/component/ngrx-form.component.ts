//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { createFormGroupState } from 'ngrx-forms';
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
  private _formState: fromStore.NgrxFormState | undefined;
  private _title: string = "Form Title";

  // Accessor
  get form() { return this._formState?.myForm ; }
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {
    store.select(fromStore.selectState).subscribe(s => this._formState = s);
  }

  ngOnInit() {
    // Form definition
    const group = createFormGroupState<{}>(this._title, {});
    //this._form = new FormGroup({});
    console.log(this._formState);
  }

  onSubmit(): void {
    // Stop here if form is invalid
    if (this._formState?.myForm.isInvalid) { return; }
  }
}
