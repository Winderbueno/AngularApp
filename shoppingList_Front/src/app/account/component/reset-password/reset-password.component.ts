//#region Angular, Material, NgRx
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import { FormComponent } from '@form/component';
import * as fromToken from '@token/store/';
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent extends FormComponent implements OnDestroy {

  TokenStatusEnum = fromToken.TokenStatusEnum;
  token:Token|undefined;
  tokenName: string = 'Reset Password';

  constructor(
    router: Router,
    route: ActivatedRoute,
    store: Store,
  ) {
    super(router, route, store);

    // Suscribe to token state
    this.store.select(fromToken.selectTokenByName(this.tokenName))
      .subscribe(token => this.token=token);
  }

  ngOnInit() {
    // Form Configuration
    super.formId = "Reset Password";
    super.unpersist = true;
    super.ngOnInit();

    // Get & remove token from url (to prevent http referer leakage)
    const token = this.route.snapshot.queryParams['token'];
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Validate Token
    this.store.dispatch(
      fromToken.validateTokenAction({
        token: new Token({
          name: this.tokenName,
          value: token
        }),
      })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(fromToken.deleteTokenAction({ name: this.tokenName}));
  }
}
