//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region App Action, Selector
import * as TokenActions from '@token/store/token.actions';
import * as TokenSelectors from '@token/store/token.selectors';
//#endregion


@Injectable()
export class TokenEffects {

  // TODO - Find a way not to use a class property ?
  name: string|undefined = 'test';

  defineToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TokenActions.defineToken),
      map((action) => {
        // TODO - Change impl and use RxJS Token ?
        let timeout = setTimeout(() => this.store.dispatch(action.token.action), action.token.time);

        return TokenActions.tokenDefined({
          name: action.token.name,
          timeoutHandler: timeout
        });
      })
    )
  );


  deleteToken$ = createEffect(() =>
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
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
