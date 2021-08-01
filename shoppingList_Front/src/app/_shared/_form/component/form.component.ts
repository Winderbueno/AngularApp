//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region App Component, Model, Service
import { FormErrorService } from '@app_form/service/form-error.service';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  protected formTitle!:string;
  private _form!: FormGroup;
  submitted = false; // TODO - Used for what ?

  // Getters
  get title() { return this.formTitle;}
  get form() { return this._form;}
  get f() { return this._form.controls; }
  get err() { return this.formErrorService; }

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected formErrorService: FormErrorService,
    protected alertService: AlertService,
    protected accountService: AccountService,
  ) { }

  ngOnInit() {
    // Form definition
    this._form = new FormGroup({});
  }

  onSubmit(): void {

    this.submitted = true;

    // Stop here if form is invalid
    if (this._form.invalid) { return; }

    this.submitAction();
  }

  submitAction() : void {}
}
