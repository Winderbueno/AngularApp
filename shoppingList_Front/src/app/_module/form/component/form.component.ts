//#region Angular & Material
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region NgRx
import { Store } from '@ngrx/store';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  private _form!: FormGroup;
  private _submitted: boolean = false; // TODO -Encapsulate this info in a Form Object with FormGroup ?
  private _title: string = "Form Title";

  // Accessor
  get form() { return this._form;}
  get submitted() { return this._submitted; }
  get title() { return this._title;}
  protected set title(title:string) { this._title=title }
  get ctrls() { return this._form.controls; }

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

    this.submitAction();
  }

  submitAction() : void {}
}
