//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { AccountService } from '@app_account/service/account.service';
import { AlertService } from '@app_error/service/alert.service';
import { LoaderService } from '@app/_shared/loader/loader.service';
//#endregion

@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent implements OnInit {

  // Form
  form!: FormGroup;
  submitted = false;

  // Getters
  get f() { return this.form.controls; }
  get err() { return this.formErrorService; }
  get load() { return this.loaderService;}

  constructor(
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private accountService: AccountService,
    private alertService: AlertService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit() {
    // Form definition
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      .subscribe({
        next: () => this.alertService.success('Please check your email for password reset instructions'),
        error: error => this.alertService.error(error)
      });
  }
}
