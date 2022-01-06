//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
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
  protected _formState: fromStore.FormState | undefined;
  private _title: string = "Form Title";

  // Accessor
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }
  get formState() { return this._formState?this._formState:undefined; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {
    store.select(fromStore.selectState).subscribe(s => this._formState = s);
  }

  ngOnInit() {
    // Form definition
    if(this._formState![this._title] === undefined) {
      this.store.dispatch(fromStore.CreateFormAction({ name:this._title }));
    }
  }

  onSubmit(): void {
    // Stop here if form is invalid
  }
}
