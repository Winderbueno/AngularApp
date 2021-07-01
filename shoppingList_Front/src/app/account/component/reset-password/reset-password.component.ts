//#region Angular, Material, RxJS
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
import { AlertService } from '@app_error/service/alert.service';
import { MustMatch } from '@app_error/must-match.validator';
import { AccountService } from '@app_account/service/account.service';
//#endregion

enum TokenStatus {
  Validating,
  Valid,
  Invalid
}


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent implements OnInit {

  TokenStatus = TokenStatus;
  tokenStatus = TokenStatus.Validating;
  token = '';

  // Form
  form!: FormGroup;
  submitted = false;

  // Getters
  get f() { return this.form.controls; } // Form Control
  get err() { return this.formErrorService; } // Error Service

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formErrorService: FormErrorService,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // Form definition
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    this.accountService.validateResetToken(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.token = token;
          this.tokenStatus = TokenStatus.Valid;
        },
        error: () => {
          this.tokenStatus = TokenStatus.Invalid;
        }
      });
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.form.invalid) { return; }

    this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success(
            'Password successfully reinitialised, you can now log in :)',
            { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => { this.alertService.error(error); }
      });
  }
}
