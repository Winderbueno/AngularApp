//#region Angular, Material, NgRx
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import * as ComponentActions from './reset-password.actions';
import * as fromToken from '@token/store/';
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent implements OnDestroy {

  TokenStatusEnum = fromToken.TokenStatusEnum;
  token:Token|undefined;
  tokenName: string = 'resetPwd';

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
  ) {
    super(router, route, store);

    // Suscribe to the token state
    this.store.select(fromToken.selectTokenByName(this.tokenName))
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
      fromToken.validateTokenAction({
        token: new Token({
          name: this.tokenName,
          value: token
        }),
      })
    );
  }

  submitValidAction(): TypedAction<string> {
    return ComponentActions.resetPasswordSubmitAction({
      token: this.token?.value,
      password: this.value.Password as string,
      confirmPassword: this.value.ConfirmPassword as string
    });
  }

  ngOnDestroy() {
    this.store.dispatch(fromToken.deleteTokenAction({ name: this.tokenName}));
  }
}
