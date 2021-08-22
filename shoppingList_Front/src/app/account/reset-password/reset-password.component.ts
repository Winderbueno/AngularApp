//#region Angular & Material
import { Component } from '@angular/core';
//#endregion

//#region App Component, Model
import { ResetPasswordStore } from './reset-password.store';
import { FormComponent } from '@app_form/component/form.component';
import * as ComponentActions from './reset-password.actions';
import { TokenStatusEnum } from "@app_enum/token-status.enum";
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion


@Component({
  templateUrl: 'reset-password.component.html',
  providers: [ResetPasswordStore],
})
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus = this.componentStore.tokenStatus$;
  token = this.componentStore.token$;

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
    private readonly componentStore: ResetPasswordStore,
  ) {
    super(router, route, store);
  }

  ngOnInit() {
    // Form Init
    super.title = "Reset Password";
    super.ngOnInit();

    const token = this.route.snapshot.queryParams['token']
    this.componentStore.setToken(token);

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch ValidateResetToken action
    this.componentStore.validateResetToken(token);
  }

  submitAction() {

    this.componentStore.token$
      .subscribe(token => {

        // Dispatch ResetPassword action
        this.store.dispatch(
          ComponentActions.resetPasswordSubmit({
            token: token,
            password: this.ctrls.Password.value,
            confirmPassword: this.ctrls.ConfirmPassword.value
          })
        );
      });
  }
}
