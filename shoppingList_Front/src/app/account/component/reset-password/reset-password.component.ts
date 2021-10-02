//#region Angular, Material, NgRx
import { Component, OnDestroy } from '@angular/core';
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
export class ResetPasswordComponent extends FormComponent implements OnDestroy {

  TokenStatusEnum = TokenStatusEnum;
  token:Token|undefined;
  tokenName: string = 'resetPwd';

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
  ) {
    super(router, route, store);

    // Suscribe to the token state
    this.store.select(TokenSelectors.selectTokenByName(this.tokenName))
      .subscribe(token => this.token=token);
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
      ComponentActions.validateResetTokenAction({
        token: new Token({
          name: this.tokenName,
          value: token
        }),
      })
    );
  }

  submitAction(): TypedAction<string> {
    return ComponentActions.resetPasswordSubmitAction({
      token: this.token?.value,
      password: this.ctrls.Password.value,
      confirmPassword: this.ctrls.ConfirmPassword.value
    })
  }

  ngOnDestroy() {
    this.store.dispatch(
      ComponentActions.deleteResetTokenAction({ name: this.tokenName})
    );
  }
}
