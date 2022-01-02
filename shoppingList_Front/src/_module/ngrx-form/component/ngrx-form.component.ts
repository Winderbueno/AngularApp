//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControlState } from 'ngrx-forms';
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
  protected _formState: fromStore.NgrxFormState | undefined;
  private _title: string = "Form Title";

  // Accessor
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }
  get formState() { return this._formState?this._formState:undefined; }

  formStateControl(ctrlName:string): FormControlState<string|boolean|number> { 
    return this._formState!.dynamicForm.controls[ctrlName] as unknown as FormControlState<string|boolean|number>; 
  }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected store: Store
  ) {
    store.select(fromStore.selectState).subscribe(s => this._formState = s);
  }

  ngOnInit() {
    // Form definition
    //this.store.dispatch(fromStore.CreateGroupElementAction({name:'test'}));
  }

  onSubmit(): void {
    // Stop here if form is invalid
    const test = this.formState?.dynamicForm.controls.bonjour.value!;
  }
}
