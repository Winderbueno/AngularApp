//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';
//#endregion

//#region Action, Selector
import * as fromComponent from '../component/';
import * as fromAccount from '@account/store/';
//#endregion


@Injectable()
export class AccountEffects {

  refreshAccountToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => fromAccount.refreshTokenAction())
    )
  );

  constructor(
    private actions$: Actions
  ) {}
}
