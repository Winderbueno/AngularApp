//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromComponent from '@account/component/';
import * as fromToken from '@token/store/';
//#endregion


@Injectable()
export class TokenEffects {

  validateToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromComponent.validateResetTokenAction,
        fromComponent.validateEmailTokenAction,
      ),
      map((action) => {
        return fromToken.validateTokenAction({ token: action.token });
      })
    )
  );


  deleteToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromComponent.deleteResetTokenAction,
        fromComponent.deleteEmailTokenAction,
      ),
      map((action) => {
        return fromToken.deleteTokenAction({ name: action.name });
      })
    )
  );

  constructor(
    private actions$: Actions
  ) { }
}
