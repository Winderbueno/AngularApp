//#region Angular, Material, NgRx
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import * as Actions from './verify-email.actions';
import * as fromToken from '@token/store';
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit, OnDestroy {

  TokenStatusEnum = fromToken.TokenStatusEnum;
  token:Token|undefined;
  tokenId: string = 'email';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    // Suscribe to the token state
    this.store.select(fromToken.selectToken(this.tokenId)).subscribe(token => {

      this.token=token;

      if(token && token.status === this.TokenStatusEnum.Valid) {
          this.store.dispatch(Actions.emailTokenValidatedAction({ message: 'Verification successful, you can now login' }));
      }
    });
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
