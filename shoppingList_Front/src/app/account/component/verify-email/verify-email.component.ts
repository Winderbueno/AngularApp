//#region Angular, Material, NgRx
import { Component, OnInit } from '@angular/core';
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
export class VerifyEmailComponent implements OnInit {

  TokenStatusEnum = TokenStatusEnum;
  token:Token|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    // Suscribe to the token state
    this.store.select(TokenSelectors.selectTokenByName('email')).subscribe(token => {

      this.token=token;

      if(token && token.status === TokenStatusEnum.Valid)
        this.store.dispatch(ComponentActions.emailTokenValidated());
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
          name:'email',
          value: token
        }),
      })
    );
  }
}
