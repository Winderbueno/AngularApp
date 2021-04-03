//#region Angular and RxJS Module
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { AlertService } from '@app/_shared/service/alert.service';
import { AccountService } from '@app/_shared/service/business/account.service'
import { MustMatch } from '@app/_shared/must-match.validator';
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
  loading = false;
  submitted = false;

  // Form controls getter
  get f() { return this.form.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
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

    // remove token from url to prevent http referer leakage
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

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  getPasswordError() {
    let formCtrl = this.form.controls['password'];
    return formCtrl.hasError('required') ? 'Veuillez saisir un mot de passe' : '';
  }

  getConfirmPasswordError() {
    let formCtrl = this.form.controls['confirmPassword'];
    return formCtrl.hasError('required') ? 'Veuillez confirmer votre mot de passe' :
      formCtrl.hasError('mustMatch') ? 'Les mots de passe doivent être les mêmes' : '';
  }
}