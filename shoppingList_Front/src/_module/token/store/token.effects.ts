//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { exhaustMap, catchError, map } from 'rxjs/operators';
//#endregion

//#region Action
import * as TokenActions from '@token/store/token.actions';
import { AccountService } from '@account/service/account.service';
//#endregion


@Injectable()
export class TokenEffects {

  validateToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenActions.validateToken),
      exhaustMap((action) => {

        // TODO - BACK -> Only 1 method for Token Validation
        if(action.token.name === "ResetPWD")
          return this.accountService.validateResetToken(action.token.value).pipe(
            map(() => TokenActions.tokenValidated({ name : action.token.name })),
            catchError(() => of(TokenActions.tokenInvalidated({ name : action.token.name })))
          );
        else {
          return this.accountService.verifyEmail(action.token.value).pipe(
            map(() => TokenActions.tokenValidated({ name : action.token.name })),
            catchError(() => of(TokenActions.tokenInvalidated({ name : action.token.name })))
          );
        }
      })
  ));


  constructor(
    private actions$: Actions,
    private accountService: AccountService,
  ) { }
}
