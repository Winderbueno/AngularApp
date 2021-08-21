//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { FormComponent } from '@app_form/component/form.component';
import * as ComponentActions from './reset-password.actions';
import * as AccountSelector from '@app_selector/account.selectors';
import * as RouterSelector from '@app_selector/router.selectors';
import { TokenStatusEnum } from "@app_enum/token-status.enum";
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus!: TokenStatusEnum;
  token: string | undefined = '';

  ngOnInit() {
    // Form Init
    super.title = "Reset Password";
    super.ngOnInit();

    // TO_TEST - Get info from Store
    this.store.select(RouterSelector.selectQueryParam('token')).subscribe(value => this.token = value);
    this.store.select(AccountSelector.resetTokenStatus).subscribe(value => this.tokenStatus=value);

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch ValidateResetToken action
    this.store.dispatch(
      ComponentActions.validateResetToken({
        token: this.token,
      })
    );
  }

  submitAction() {

    // Dispatch ResetPassword action
    this.store.dispatch(
      ComponentActions.resetPasswordSubmit({
        token: this.token,
        password: this.ctrls.Password.value,
        confirmPassword: this.ctrls.ConfirmPassword.value
      })
    );
  }
}
