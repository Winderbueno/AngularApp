//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region App Action
import * as TokenActions from '@token/store/token.actions';
import {
  validateResetToken,
  validateEmailToken,
  deleteEmailToken,
  deleteResetToken } from '@account/component/';
//#endregion


@Injectable()
export class TokenEffects {

  validateToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        validateResetToken,
        validateEmailToken,
      ),
      map((action) => {
        return TokenActions.validateToken({ token: action.token });
      })
    )
  );


  deleteToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        deleteResetToken,
        deleteEmailToken,
      ),
      map((action) => {
        return TokenActions.deleteToken({ name: action.name });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
