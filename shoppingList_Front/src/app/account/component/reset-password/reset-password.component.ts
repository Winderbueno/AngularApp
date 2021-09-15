//#region Angular, Material, NgRx
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component/form.component';
import * as ComponentActions from './reset-password.actions';
import * as TokenSelectors from '@token/store/token.selectors';
import { TokenStatusEnum } from "@token/model/enum/token-status.enum";
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent {

  TokenStatusEnum = TokenStatusEnum;
  token:Token|undefined;

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
  ) {
    super(router, route, store);

    // TODO
    this.store.select(TokenSelectors.selectTokenByName('resetPwd')).subscribe(val => this.token=val);
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

  submitAction(): TypedAction<string> {
    return ComponentActions.resetPasswordSubmit({
      token: this.token?.value,
      password: this.ctrls.Password.value,
      confirmPassword: this.ctrls.ConfirmPassword.value
    })
  }
}
