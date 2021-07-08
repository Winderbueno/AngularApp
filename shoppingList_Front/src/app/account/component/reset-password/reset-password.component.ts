//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
//#endregion

//#region Model and Service
import { FormComponent } from '@app/_shared/form/component/field-password/form.component';
import { FormErrorService } from '@app/_shared/form/service/form-error.service';
import { LoaderService } from '@app/_shared/loader/loader.service'; // TODO - Use Loader
import { AlertService } from '@app_alert/service/alert.service';
import { AccountService } from '@app_account/service/account.service';
//#endregion

enum TokenStatus {
  Validating,
  Valid,
  Invalid
}


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent {

  TokenStatus = TokenStatus;
  tokenStatus = TokenStatus.Validating;
  token = '';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder,
    formErrorService: FormErrorService,
    loaderService: LoaderService,
    alertService: AlertService,
    accountService: AccountService,
  ) {
    super(formBuilder, formErrorService, loaderService, alertService, accountService);
    super.formDef = {};
  }

  ngOnInit() {
    super.ngOnInit();

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

  submitAction() {
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
