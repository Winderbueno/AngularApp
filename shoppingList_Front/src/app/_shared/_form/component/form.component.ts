//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region App Component, Model, Service
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  private _form!: FormGroup;
  private _submitted = false; // TODO -Encapsulate this info in a Form Object with FormGroup ?
  protected formTitle!:string;

  // Getters
  get form() { return this._form;}
  get submitted() { return this._submitted; }
  get title() { return this.formTitle;}
  get ctrls() { return this._form.controls; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected alertService: AlertService,
    protected accountService: AccountService,
  ) { }

  ngOnInit() {
    // Form definition
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
