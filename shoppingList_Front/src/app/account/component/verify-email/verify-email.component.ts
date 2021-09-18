//#region Angular, Material, NgRx
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//#endregion

//#region App Component, Model
import * as ComponentActions from './verify-email.actions';
import * as TokenSelectors from '@token/store/token.selectors';
import { TokenStatusEnum } from "@token/model/enum/token-status.enum";
import { Token } from '@token/model/token.model';
//#endregion


@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit, OnDestroy {

  TokenStatusEnum = TokenStatusEnum;
  token:Token|undefined;
  tokenName: string = 'email';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    // Suscribe to the token state
    this.store.select(TokenSelectors.selectTokenByName(this.tokenName)).subscribe(token => {

      this.token=token;

      if(token && token.status === TokenStatusEnum.Valid) {
          this.store.dispatch(ComponentActions.emailTokenValidated({ message: 'Verification successful, you can now login' }));
      }
    });
  }

  ngOnInit() {

    const token = this.route.snapshot.queryParams['token']

    // Remove token from url to prevent http referer leakage
    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    // Dispatch validate Email Token action
    this.store.dispatch(
      ComponentActions.validateEmailToken({
        token: new Token({
          name:this.tokenName,
          value: token
        }),
      })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(
      ComponentActions.deleteEmailToken({ name: this.tokenName})
    );
  }
}
