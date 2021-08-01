//#region Angular, Material, RxJS
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
//#endregion

//#region App Component, Model, Service
import { FormComponent } from '@app_form/component/form.component';
import { TokenStatusEnum } from "@app_account/model/enum/token-status.enum";
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus = TokenStatusEnum.Validating;
  token = '';

  ngOnInit() {
    // Form Init
    super.formTitle = "Reset Password";
    super.ngOnInit();

    // Get token from route
    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Validate token
    this.accountService.validateResetToken(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.token = token;
          this.tokenStatus = TokenStatusEnum.Valid;
        },
        error: () => {
          this.tokenStatus = TokenStatusEnum.Invalid;
        }
      });
  }

  submitAction() {
    this.accountService.resetPassword(this.token, this.ctrls.Password.value, this.ctrls.ConfirmPassword.value)
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
