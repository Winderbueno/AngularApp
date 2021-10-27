//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromAction from '../store/action/';
import * as fromStore from '../store';
//#endregion

//#region Model
import { AlertTypeEnum } from '@alert/model/enum/alert-type.enum'; // TODO - not necessary ?
//#endregion


@Injectable()
export class AutoLogOutEffects {

  autoLogOutByRefreshToken$ = createEffect(() =>

    this.actions$.pipe(
      ofType(fromAction.refreshTokenFailureAction),
      withLatestFrom(this.store.select(fromStore.isLogged)),
      filter(([action, isLogged]) => isLogged === true),
      map(([action]) => fromAction.autoLogOutAction({
        error: action.error,
      }))
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store
  ) { }
}
