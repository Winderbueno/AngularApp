//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { TokenStore } from '@module/token/token.store';
import { FormComponent } from '@form/component/form.component';
import * as ComponentActions from './reset-password.actions';
import { TokenStatusEnum } from "@token/model/enum/token-status.enum";
import { Token } from '@token/model/token.model';
//#endregion


@Component({
  templateUrl: 'reset-password.component.html',
  providers: [TokenStore],
})
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  tokenStatus = this.tokenStore.tokenStatus$;
  token = this.tokenStore.token$;

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
    private readonly tokenStore: TokenStore,
  ) {
    super(router, route, store);
  }

  ngOnInit() {
    // Form Init
    super.title = "Reset Password";
    super.ngOnInit();

    const token = this.route.snapshot.queryParams['token'];

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch ResetPassword action
    this.store.dispatch(
      ComponentActions.validateResetToken({
        token: new Token({
          name:"resetPwd",
          value: token
        }),
      })
    );
  }

  submitAction() {

    this.tokenStore.token$
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
