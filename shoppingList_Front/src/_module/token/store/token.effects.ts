//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region App Action, Selector
import * as TokenActions from '@token/store/token.actions';
import * as TokenSelectors from '@token/store/token.selectors';
import * as AccountAPIActions from '@account/store/action/account.api.actions';
import { AccountService } from '@account/service/account.service';
import { TokenState } from './token.state';
//#endregion


@Injectable()
export class TokenEffects {

  // TODO - Find a way not to use a class property ?
  name: string|undefined = 'test';

  /*defineToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenActions.validateToken),
      map((action) => {
        // TODO - Change impl and use RxJS Token ?
        let timeout = setTimeout(() => this.store.dispatch(action.token.action), action.token.time);

        return TokenActions.tokenDefined({
          name: action.token.name,
          timeoutHandler: timeout
        });
      })
    )
  );*/

  /*validateResetToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenActions.validateToken),
      withLatestFrom((action) => this.store.select(TokenSelectors.selectTokenByName(action.name))),
      map(()) =>
        this.accountService.validateResetToken(token.).pipe(
          map((account: Account) => AccountAPIActions.validateResetTokenSuccess()),
          catchError((error) => of(AccountAPIActions.validateResetTokenFailure({ error: error })))
      ))
  ));*/

 /* validateResetToken$ = createEffect(() =>
  this.actions$.pipe(
    ofType(validateResetToken),
    exhaustMap((action) =>
      this.accountService.validateResetToken(action.token).pipe(
        map(() => TokenActions.validateToken({ token : token})),
        catchError((error) => TokenActions.tokenDefined), //
    )),
    );
});*/

validateToken$ = createEffect(() =>
    // TODO -> Should not be in Account Module
    this.actions$.pipe(
      ofType(TokenActions.validateToken),
      withLatestFrom((action) => this.store.select(TokenSelectors.selectTokenByName(action.name))),
      map((token) => {

          return TokenActions.validateToken(token.);

      })
    )
  );




  /*deleteToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenActions.deleteToken),
      withLatestFrom((action) => this.store.select(TokenSelectors.selectTokenByName(action.name))),
      map((token) => {

        // TODO - Why is this an Observable ?
        token.subscribe(val => {
          clearTimeout(val?.timeoutHandler);
          this.name = val?.name;
          }
        )

        return TokenActions.tokenDeleted({ name: this.name });
      })
    )
  );*/


  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private store: Store<TokenState>
  ) { }
}
