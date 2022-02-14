//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAPI from '../service/account.api.actions';
import * as fromStore from '../store';
//#endregion


@Injectable()
export class AutoLogoutEffects {

  autoLogoutByRefreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAPI.refreshTokenFailureAction),
      withLatestFrom(this.store.select(fromStore.isLogged)),
      filter(([, isLogged]) => isLogged === true),
      map(([action]) => fromStore.autoLogoutAction({
        error: action.error,
      }))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}
