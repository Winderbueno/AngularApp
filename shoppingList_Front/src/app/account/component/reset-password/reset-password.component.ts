//#region Angular, Material, NgRx
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region Module
import * as fromToken from '@token/store';
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'reset-password.component.html' })
export class ResetPasswordComponent implements OnDestroy {

  formId = 'Reset Password';
  TokenStatusEnum = fromToken.TokenStatusEnum;
  token:Token|undefined;
  tokenId = 'Reset Password';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    // Suscribe to token state
    this.store.select(fromToken.selectToken(this.tokenId))
      .subscribe(token => this.token=token);
  }

  ngOnInit() {
    // Get & remove token from url (to prevent http referer leakage)
    const token = this.route.snapshot.queryParams['token'];
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Validate Token
    this.store.dispatch(
      fromToken.validateTokenAction({
        token: new Token({
          tokenId: this.tokenId,
          value: token
        }),
      })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(fromToken.deleteTokenAction({ tokenId: this.tokenId}));
  }
}
