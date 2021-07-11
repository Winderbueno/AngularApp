//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app/_shared/form/service/form-error.service';
import { LoaderService } from '@app/_shared/loader/loader.service';
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion


@Component({
  selector: 'app-form',
  template: ``,
})
export class FormComponent implements OnInit {

  // Form
  protected formDef:any;
  private _form!: FormGroup;
  submitted = false;

  // Getters
  get form() { return this._form;}
  get f() { return this._form.controls; }
  get err() { return this.formErrorService; }
  get isLoading() { return this.loaderService.loading;}

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    private formBuilder: FormBuilder,
    protected formErrorService: FormErrorService,
    protected loaderService: LoaderService,
    protected alertService: AlertService,
    protected accountService: AccountService,
  ) { }

  ngOnInit() {
    // Form definition
    this._form = this.formBuilder.group(this.formDef);
  }

  onSubmit(): void {

    this.submitted = true;

    // Stop here if form is invalid
    if (this._form.invalid) { return; }

    this.submitAction();
  }

  submitAction() : void {}
}
