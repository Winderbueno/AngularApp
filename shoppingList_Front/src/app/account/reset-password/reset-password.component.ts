//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
import * as ComponentActions from './reset-password.actions';
import { TokenStatusEnum } from "@app_enum/token-status.enum";
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus = TokenStatusEnum.Validating;
  token = '';

  ngOnInit() {
    // Form Init
    super.title = "Reset Password";
    super.ngOnInit();

    // Get token from route
    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Validate token
    // TODO - NgRx
    /*this.accountService.validateResetToken(token)
      .pipe(first())
      .subscribe({
        next: () => {
          this.token = token;
          this.tokenStatus = TokenStatusEnum.Valid;
        },
        error: () => {
          this.tokenStatus = TokenStatusEnum.Invalid;
        }
      });*/
  }

  submitAction() {

    // Dispatch Reset Password action
    this.store.dispatch(
      ComponentActions.resetPasswordSubmit({
        token: this.token,
        password: this.ctrls.Password.value,
        confirmPassword: this.ctrls.ConfirmPassword.value
      })
    );
  }
}
