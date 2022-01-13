//#region Angular, Material, NgRx
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import * as ComponentActions from './verify-email.actions';
import * as fromToken from '@token/store/';
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit, OnDestroy {

  TokenStatusEnum = fromToken.TokenStatusEnum;
  token:Token|undefined;
  tokenName: string = 'email';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    // Suscribe to the token state
    this.store.select(fromToken.selectTokenByName(this.tokenName)).subscribe(token => {

      this.token=token;

      if(token && token.status === this.TokenStatusEnum.Valid) {
          this.store.dispatch(ComponentActions.emailTokenValidatedAction({ message: 'Verification successful, you can now login' }));
      }
    });
  }

  ngOnInit() {

    const token = this.route.snapshot.queryParams['token']

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch validate Email Token action
    this.store.dispatch(
      fromToken.validateTokenAction({
        token: new Token({
          name:this.tokenName,
          value: token
        }),
      })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(
      fromToken.deleteTokenAction({ name: this.tokenName})
    );
  }
}
