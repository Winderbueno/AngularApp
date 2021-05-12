//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AlertService } from '@app_service/error-management/alert.service';
import { FormErrorService } from '@app_service/error-management/form-error.service';
import { AccountService } from '@app_service/business/account.service';
//#endregion

@Component({ templateUrl: 'forgot-password.component.html' })
export class ForgotPasswordComponent implements OnInit {
  
  // Form
  form!: FormGroup;
  loading = false;
  submitted = false;

  // Easy access getters
  get f() { return this.form.controls; } // Form Control
  get err() { return this.formErrorService; } // Error Service

  constructor(
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // Form definition
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  onSubmit() {
    this.submitted = true;

    // Reset alerts on submit
    this.alertService.clear();

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    this.loading = true;
    this.alertService.clear();
    this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => this.alertService.success('Please check your email for password reset instructions'),
        error: error => this.alertService.error(error)
      });
  }
}